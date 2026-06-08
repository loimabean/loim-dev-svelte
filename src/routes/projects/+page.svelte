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
			<a
				href={resolve('/projects/terrain')}
				class="group flex w-full items-center gap-4 rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
			>
				<div>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
					>
						terrain generator
					</h2>
					<p class="mt-2 text-taupe-500 dark:text-taupe-400">
						procedural terrain generator + renderer using rust and wgpu
					</p>
				</div>
			</a>
		</li>
	</ul>
</main>
