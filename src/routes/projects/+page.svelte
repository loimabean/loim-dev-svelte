<script lang="ts">
	import Metadata from '#lib/Metadata.svelte';
</script>

<Metadata title="my projects" description="some of the project i'd like to show off" />

<main class="w-full max-w-xl">
	<h1 class="mb-8 text-4xl font-extrabold">projects</h1>
	<ul class="w-full space-y-4">
		<li>
			<a href="/projects/terrain" class="group flex card-link items-center gap-4">
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
