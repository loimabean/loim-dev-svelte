<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<meta property="og:title" content="you got an error!" />
	<meta property="og:description" content="uh oh" />
</svelte:head>

<main class="flex flex-col items-center">
	<h1 class="mb-8 text-4xl font-extrabold text-red-800 dark:text-red-400">you got an error!</h1>
	<h2 class="mb-4 text-2xl font-semibold">{page.error?.message}</h2>
	<p>if you didn't expect that, let me know 😅</p>
</main>
