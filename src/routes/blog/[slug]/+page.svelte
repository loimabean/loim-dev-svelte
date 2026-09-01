<script lang="ts">
	import { formatDate } from 'date-fns';
	import Metadata from '#lib/Metadata.svelte';

	let { data } = $props();
</script>

<Metadata title="{data.title} - liam's blog" description={data.description} />

<main>
	<a class="mb-4 block link" href="/blog">← back to blog</a>

	<article class="prose text-justify hyphens-auto prose-taupe dark:prose-invert">
		<header class="mb-4">
			<h1 class="mb-2">{data.title}</h1>
			<p class="text-md text-taupe-600 dark:text-taupe-400">{data.description}</p>
			<p class="text-sm text-taupe-500">{formatDate(data.date, 'MMMM do, yyyy')}</p>
		</header>

		<data.content />
	</article>
</main>
