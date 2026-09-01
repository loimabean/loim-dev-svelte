<script lang="ts">
	import resume from '#lib/assets/resume.pdf';
	import Metadata from '#lib/Metadata.svelte';
</script>

<Metadata title="my resume" description="my resume, for all the recruiters and corporations." />

<main class="flex w-full max-w-4xl flex-col gap-4">
	<div class="flex items-center justify-between">
		<h1 class="text-4xl font-extrabold">resume</h1>
		<a
			href={resume}
			download="liam-rust-resume.pdf"
			class="flex items-center justify-center gap-2 rounded-full bg-amber-700 px-4 py-2 font-semibold text-taupe-50 transition-all hover:bg-amber-800 active:bg-amber-900 active:font-bold dark:bg-amber-500 dark:text-taupe-950 dark:hover:bg-amber-400 dark:active:bg-amber-300"
		>
			<span class="text-lg">↓</span> download
		</a>
	</div>
	<object
		data={resume}
		type="application/pdf"
		title="my resume"
		class="aspect-8.5/11 w-full rounded-xl"
	>
		<p class="text-center text-taupe-500 dark:text-taupe-400">
			your browser doesn't support embedded PDFs, but you can
			<a href={resume} download="liam-rust-resume.pdf" class="link">download it here!</a>
		</p>
	</object>
	<span role="note" class="text-center text-taupe-500 dark:text-taupe-400">
		html version coming soon™
	</span>
</main>
