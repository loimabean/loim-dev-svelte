<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from 'date-fns';

	let { data } = $props();
</script>

<svelte:head>
	<title>my blog!</title>
	<meta property="og:title" content="my blog!" />
	<meta property="og:description" content="come see all {data.posts.length} posts i've made" />
</svelte:head>

<main class="w-full max-w-xl">
	<h1 class="mb-4 ml-4 text-4xl font-bold">blog</h1>
	<ul class="w-full space-y-6">
		{#each data.posts as post (post.slug)}
			<li
				class="group rounded-2xl transition hover:bg-taupe-50 hover:shadow hover:dark:bg-taupe-800"
			>
				<a href={resolve(`/blog/${post.slug}`)} class="inline-block w-full p-4">
					<p class="mb-2 text-sm text-taupe-500">
						{formatDate(post.date, 'MMMM do, yyyy')}
					</p>
					<h2
						class="text-2xl font-semibold transition group-hover:text-amber-700 dark:group-hover:text-amber-400"
					>
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
