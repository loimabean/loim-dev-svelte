<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<title>hi, i'm liam!</title>
</svelte:head>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<h1 class="text-4xl font-bold">under construction</h1>
	<h2 class="text-2xl">hi, i'm liam!</h2>
	<img src={favicon} alt="an orange circle with a smiling hexagon-shaped face" class="my-4 h-56" />
	<p>this will be my corner of the internet Soon™</p>
	<p>but until then, it's under construction :)</p>
	<ul class="mt-8">
		<li>bluesky: <a target="_blank" href="https://bsky.app/profile/loim.dev">@loim.dev</a></li>
		<li>email: <a href="mailto:hi@loim.dev">hi@loim.dev</a></li>
	</ul>
</div>
