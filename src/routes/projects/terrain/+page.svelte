<script lang="ts">
	import init from './terrain_gen.js';
	import Metadata from '$lib/Metadata.svelte';
	import { browser } from '$app/environment';

	if (browser) {
		init().then(() => {
			console.log('WASM Loaded');
		});
	}
</script>

<Metadata
	title="terrain generator - liam's projects"
	description="a procedural terrain generator built using rust and wgpu, compiled to webassembly!"
/>

<main class="h-full w-full flex flex-col items-center">
	<canvas class="h-full w-full rounded-xl" id="canvas"></canvas>
	<!-- TODO: fix breakage when user leaves and reenters page in SPA -->
	<p role="note" class="mt-4 text-taupe-500 dark:text-taupe-400 italic">
		if the above area is blank, try reloading!
	</p>
	<article>
		<h1 class="mt-4 mb-4 text-4xl font-extrabold">terrain generator</h1>
		<div class="prose prose-taupe dark:prose-invert text-justify hyphens-auto">
			<p>
				This is a procedural terrain generator I built for <a
					href="https://web.stevens.edu/catalog/archive/2024-2025/en/catalog/academic-catalog/courses/cs-computer-science/600/cs-677.html"
					>CS 677: Parallel Programming for Many-Core Processors</a
				>. The course was mainly focused on CUDA, but i chose to do a project using wpgu for a
				couple of reasons:
			</p>
			<ol>
				<li>I don't have an Nvidia card.</li>
				<li>I like Rust.</li>
				<li>I wanted it run in the browser.</li>
			</ol>
			<p>
				This ended up being a really fun time, and I learned a lot about using GPUs at a lower
				level, handling graphics and rendering pipelines, making a basic <a
					href="https://www.egui.rs/">egui</a
				> gui, handling state in a more complex Rust application, and about 3D rendering from scratch
				(which was not taught in the course, I inflicted that upon myself!)
			</p>
			<p>
				Thanks to the <a href="https://sotrh.github.io/learn-wgpu/">Learn Wgpu</a> tutorial for
				helping me with getting a good baseline rendering project going, as well
				<a href="https://github.com/GarrettGunnell/Godot-Terrain"
					>Acerola's Godot Terrain Generator</a
				> which was the inspiration for this project.
			</p>
			<p>
				<a href="https://github.com/loimabean/terrain-gen"
					>You can view the source code on GitHub here!</a
				>
			</p>
		</div>
	</article>
</main>
