<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/loim-logo.webp';
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';
	import { page } from '$app/state';

	let { children } = $props();
</script>

{#snippet navlink(link: ResolvedPathname, label: string)}
	<!-- eslint-disable svelte/no-navigation-without-resolve -- we resolve before giving to the link-->
	<li>
		<a
			class={[
				'block rounded-md border-2 border-transparent px-3 py-2 whitespace-nowrap transition-all sm:px-4',
				'hover:border-taupe-400/50 hover:bg-taupe-100/50 hover:shadow-md active:bg-taupe-50/50 active:shadow-none',
				'dark:hover:border-taupe-600/50 dark:hover:bg-taupe-700/50 dark:active:bg-taupe-600/50',
				page.url.pathname === link && 'font-bold text-amber-700 underline dark:text-amber-400'
			]}
			href={link}
		>
			{label}
		</a>
	</li>
{/snippet}
<div class="pointer-events-none fixed right-0 bottom-6 left-0 z-50 flex justify-center">
	<nav
		class={[
			'pointer-events-auto max-w-full overflow-hidden rounded-full border-2 text-base shadow-lg backdrop-blur-sm sm:text-lg',
			'border-taupe-400/50 bg-taupe-300/50 dark:border-taupe-600/50 dark:bg-taupe-700/50'
		]}
	>
		<ul
			class="flex flex-row items-center gap-1 overflow-x-auto px-2 py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-4 [&::-webkit-scrollbar]:hidden"
		>
			{@render navlink(resolve('/'), 'home')}
			{@render navlink(resolve('/about'), 'about')}
			{@render navlink(resolve('/blog'), 'blog')}
			{@render navlink(resolve('/tutorials'), 'tutorials')}
			{@render navlink(resolve('/resume'), 'resume')}
		</ul>
	</nav>
</div>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content="loim.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://loim.dev/" />
	<meta property="og:image" content={logo} />
	<meta property="twitter:card" content="summary" />
</svelte:head>
<div class="flex min-h-dvh min-w-full items-center justify-center px-6 pt-6 pb-32">
	{@render children()}
</div>
