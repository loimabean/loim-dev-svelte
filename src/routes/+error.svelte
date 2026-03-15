<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center">
	<h1 class="mb-8 text-4xl font-bold">you got an error!</h1>
	<h2 class="mb-4 text-2xl">{page.error?.message}</h2>
	<p>if you didn't expect that, let me know</p>
</div>
