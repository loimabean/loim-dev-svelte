import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-node';

const themeLight = 'gruvbox-light-soft';
const themeDark = 'gruvbox-dark-soft';
const highlighter = await createHighlighter({
	themes: [themeLight, themeDark],
	langs: ['javascript', 'typescript', 'rust']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$posts: 'src/posts'
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			smartypants: {
				dashes: 'oldschool'
			},
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							themes: {
								light: themeLight,
								dark: themeDark
							}
						})
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
