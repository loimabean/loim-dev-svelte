<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from 'date-fns';
	import Metadata from '$lib/Metadata.svelte';

	let { data } = $props();
</script>

<Metadata title="my blog" description="come see all {data.posts.length} posts i've made" />

<main class="w-full max-w-xl">
	<h1 class="mb-8 text-4xl font-extrabold">
		blog <span class="text-taupe-500 dark:text-taupe-400">({data.posts.length})</span>
	</h1>
	<ul class="w-full space-y-4">
		{#each data.posts as post (post.slug)}
			<li>
				<a href={resolve(`/blog/${post.slug}`)} class="group card-link inline-block">
					<p class="mb-2 text-sm text-taupe-500">
						{formatDate(post.date, 'MMMM do, yyyy')}
					</p>
					<h2 class="card-heading">
						{post.title}
					</h2>
					<p class="mt-4 line-clamp-2 text-taupe-700 dark:text-taupe-400">
						{post.description}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</main>
