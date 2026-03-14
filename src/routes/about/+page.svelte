<script lang="ts">
	let nums: number[] = [];
	for (let i = 0; i < 1000; i++) {
		nums.push(i);
	}
</script>

<div>
	{#each nums as num (num)}
		<p>{num}</p>
	{/each}
	<h1>about me!</h1>
	<p>hi!</p>
</div>
