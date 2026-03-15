<script lang="ts">
	import { page } from '$app/state';
</script>

<div>
	<h1 class="mb-4 text-4xl">you got an error! {page.error?.message}</h1>
	<p>if you didn't expect that, let me know...</p>
</div>
