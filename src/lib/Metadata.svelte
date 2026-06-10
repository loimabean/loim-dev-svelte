<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}
	let { title, description }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>
