<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/loim-logo.webp';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { crossfade, fly } from 'svelte/transition';
	import { quintOut, cubicIn, cubicOut } from 'svelte/easing';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { prefersReducedMotion } from 'svelte/motion';
	import type { ResolvedPathname } from '$app/types';

	/* To prevent quirky page jumping during transition */
	const FADE_OUT_MS = prefersReducedMotion.current ? 0 : 150;
	const FADE_IN_MS = prefersReducedMotion.current ? 0 : 300;
	afterNavigate(({ type }) => {
		if (type !== 'popstate' && type !== 'enter') {
			disableScrollHandling();
			setTimeout(() => {
				window.scrollTo({ top: 0, behavior: 'auto' });
			}, FADE_OUT_MS);
		}
	});

	const [send, receive] = crossfade({ duration: FADE_OUT_MS + FADE_IN_MS, easing: quintOut });
	const { children } = $props();
</script>

{#snippet navlink(link: ResolvedPathname, label: string)}
	<!-- eslint-disable svelte/no-navigation-without-resolve -- we resolve before giving to the <a> href -->
	<li class="relative block">
		<!-- TODO make this a proper shared boolean instead of calculating it twice -->
		{#if page.url.pathname.startsWith(link) && (link !== '/' || page.url.pathname === '/')}
			<div
				class="absolute inset-0 z-0 rounded-full bg-taupe-300/70 shadow-sm dark:bg-taupe-600/70"
				in:receive={{ key: 'nav-pill' }}
				out:send={{ key: 'nav-pill' }}
			></div>
		{/if}
		<a
			class={[
				'relative z-10 block rounded-full px-3 py-2 whitespace-nowrap transition-all sm:px-4',
				'hover:text-amber-800 focus:text-amber-800 active:font-extrabold dark:hover:text-amber-300 dark:focus:text-amber-300',
				page.url.pathname.startsWith(link) &&
					(link !== '/' || page.url.pathname === '/') &&
					'font-bold text-amber-700 dark:text-amber-400'
			]}
			href={link}>{label}</a
		>
	</li>
{/snippet}

<div
	class="pointer-events-none fixed right-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-0 z-50 flex justify-center"
>
	<nav
		class={[
			'pointer-events-auto mx-2 max-w-full overflow-hidden rounded-full border-2 text-base shadow-lg backdrop-blur-sm sm:text-lg',
			'border-taupe-400/50 bg-taupe-200/50 dark:border-taupe-600/50 dark:bg-taupe-700/50'
		]}
	>
		<ul
			class={[
				'flex flex-row items-center gap-1 overflow-x-auto px-2 py-2',
				'[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
			]}
		>
			{@render navlink(resolve('/'), 'home')}
			{@render navlink(resolve('/about'), 'about')}
			{@render navlink(resolve('/blog'), 'blog')}
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

<div class="grid min-w-full items-start">
	{#key page.url.pathname}
		<div
			class="col-start-1 row-start-1 flex min-h-dvh w-full items-center justify-center px-6 pt-6 pb-[calc(6rem+env(safe-area-inset-bottom))]"
			in:fly={{ y: 20, duration: FADE_IN_MS, delay: FADE_OUT_MS, easing: cubicOut }}
			out:fly={{ y: 20, duration: FADE_OUT_MS, easing: cubicIn }}
		>
			{@render children()}
		</div>
	{/key}
</div>
