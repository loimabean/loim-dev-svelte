<script lang="ts">
    import init from './cs677_final_project.js';
	import { browser } from '$app/environment';

	if (browser) {
		init().then(() => {
			console.log('WASM Loaded');
		});
	}
</script>

<main class="h-full w-full">
	<canvas class="h-full w-full" id="canvas"></canvas>
</main>
