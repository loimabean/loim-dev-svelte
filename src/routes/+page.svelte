<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<title>hi, i'm liam!</title>
	<meta property="og:title" content="hi, i'm liam!" />
	<meta property="og:description" content="welcome to my corner of the internet :)" />
</svelte:head>

<main class="flex flex-col items-center justify-center">
	<h1 class="text-4xl font-bold">hi, i'm liam!</h1>
	<img src={favicon} alt="an orange circle with a smiling hexagon-shaped face" class="my-4 h-56" />
	<p>this will be my corner of the internet Soon™</p>
	<p>but until then, it's under construction :)</p>
	<address class="mt-8 not-italic">
		<!-- TODO make a link element for this kind of thing -->
		<p>
			bluesky: <a
				class="text-amber-800 underline transition-colors visited:text-red-700 active:text-amber-900 dark:text-amber-300 dark:visited:text-red-400 dark:active:text-amber-200"
				target="_blank"
				href="https://bsky.app/profile/loim.dev">@loim.dev</a
			>
		</p>
		<p>
			email: <a
				class="text-amber-800 underline visited:text-red-700 active:text-amber-950 dark:text-amber-300 dark:visited:text-red-400 dark:active:text-amber-100"
				href="mailto:liam@loim.dev">liam@loim.dev</a
			>
		</p>
		<p>
			website source: <a
				class="text-amber-800 underline visited:text-red-700 active:text-amber-950 dark:text-amber-300 dark:visited:text-red-400 dark:active:text-amber-100"
				target="_blank"
				href="https://github.com/loimabean/loim-dev-svelte"
			>
				https://github.com/loimabean/loim-dev-svelte
			</a>
		</p>
	</address>
</main>
