<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from 'date-fns';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} - liam's blog</title>
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<main>
	<a
		class="mb-4 block text-amber-700 hover:text-amber-800 active:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 dark:active:text-amber-200"
		href={resolve('/blog')}>&lt;-- back to blog</a
	>
	<article class="prose text-justify hyphens-auto prose-taupe dark:prose-invert">
		<header class="mb-4">
			<h1 class="mb-2">{data.title}</h1>
			<p class="text-md text-taupe-600 dark:text-taupe-400">{data.description}</p>
			<p class="text-sm text-taupe-500">{formatDate(data.date, 'MMMM do, yyyy')}</p>
		</header>

		<data.content />
	</article>
</main>
