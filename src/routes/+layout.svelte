<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/loim-logo.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content="loim.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://loim.dev/" />
	<meta property="og:title" content="hi! i'm liam" />
	<meta property="og:description" content="this is my corner of the internet!" />
	<meta property="og:image" content={logo} />
	<meta property="twitter:card" content="summary" />
</svelte:head>

{@render children()}
