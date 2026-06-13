import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { mdsvex, escapeSvelte, type MdsvexOptions } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-node';

const themeLight = 'gruvbox-light-soft';
const themeDark = 'gruvbox-dark-soft';

const highlighter = await createHighlighter({
	themes: [themeLight, themeDark],
	langs: ['javascript', 'typescript', 'rust']
});

const mdsvexOptions: MdsvexOptions = {
	extensions: ['.svx', '.md'],
	smartypants: { dashes: 'oldschool' },
	highlight: {
		highlighter: (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang: lang as string, // hack, but their example code breaks
					themes: { light: themeLight, dark: themeDark }
				})
			);

			return `{@html \`${html}\` }`;
		}
	}
};

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			adapter: adapter(),
			experimental: { remoteFunctions: true, handleRenderingErrors: true },
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				experimental: { async: true }
			},
			preprocess: [mdsvex(mdsvexOptions)],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
