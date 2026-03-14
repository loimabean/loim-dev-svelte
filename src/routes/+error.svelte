<script lang="ts">
	import { page } from '$app/state';
</script>

<div>
	<h1 class="text-4xl mb-4">you got an error! {page.error?.message}</h1>
	<p>if you didn't expect that, let me know...</p>
</div>
