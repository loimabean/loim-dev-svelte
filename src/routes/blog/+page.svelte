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
	<h1 class="mb-8 text-4xl font-bold">blog</h1>
	<ul class="w-full space-y-4">
		{#each data.posts as post (post.slug)}
			<li>
				<a
					href={resolve(`/blog/${post.slug}`)}
					class="group inline-block w-full rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
				>
					<p class="mb-2 text-sm text-taupe-500">
						{formatDate(post.date, 'MMMM do, yyyy')}
					</p>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
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
