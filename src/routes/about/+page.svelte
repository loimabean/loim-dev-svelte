<script lang="ts">
	import { differenceInYears } from 'date-fns';

	const birthday = new Date(2002, 10, 3);
	const today = new Date();
	const age = differenceInYears(today, birthday);
</script>

<svelte:head>
	<title>about me</title>
	<meta property="og:title" content="about me" />
	<meta
		property="og:description"
		content="information about me, liam! (the creator of this site)"
	/>
</svelte:head>

<main class="max-w-xl">
	<h1 class="mb-4 text-4xl font-bold">about me</h1>
	<p>
		i'm <strong class="text-amber-700 dark:text-amber-400">liam rust</strong>!
		<span class="text-taupe-700 dark:text-taupe-300">(he/she/they)</span>
	</p>
	<p>i'm a {age} year old graduate computer science student at Stevens Institute of Technology.</p>
	<figure class="my-4 flex flex-col items-center">
		<enhanced:img
			src="$lib/assets/me.jpg"
			alt="A smiling androgynous person in a motorized wheelchair with their hand making a peace sign. They are wearing all orange. They have medium-long, dirty blonde hair, round gold glasses, and hexagon earrings."
			class="mb-2 w-lg rounded-xl"
		/>
		<figcaption class="italic">that's me!</figcaption>
	</figure>
</main>
