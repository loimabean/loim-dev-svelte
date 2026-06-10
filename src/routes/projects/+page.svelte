<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>my projects!</title>
	<meta property="og:title" content="my projects!" />
	<meta
		name="description"
		property="og:description"
		content="some of the project i'd like to show off"
	/>
</svelte:head>

<main class="w-full max-w-xl">
	<h1 class="mb-8 text-4xl font-extrabold">projects</h1>
	<ul class="w-full space-y-4">
		<li>
			<a href={resolve('/projects/terrain')} class="group card-link flex items-center gap-4">
				<div>
					<h2 class="card-heading">terrain generator</h2>
					<p class="mt-2 text-taupe-500 dark:text-taupe-400">
						procedural terrain generator + renderer using rust and wgpu
					</p>
				</div>
			</a>
		</li>
	</ul>
</main>
