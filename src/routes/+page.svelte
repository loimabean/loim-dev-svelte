<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import bluesky from '$lib/assets/bluesky.svg';
	import mail from '$lib/assets/mail.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import github_black from '$lib/assets/github-black.svg';
	import github_white from '$lib/assets/github-white.svg';
	import git from '$lib/assets/git.svg';
	import { resolve } from '$app/paths';
	import Metadata from '$lib/Metadata.svelte';

	let { data } = $props();
</script>

<Metadata title="hi, i'm liam!" description="welcome to my corner of the internet :)" />

<main class="flex w-full max-w-xl flex-col items-center justify-center">
	<h1 class="text-4xl font-extrabold">hi, i'm liam!</h1>
	<img src={favicon} alt="an orange circle with a smiling hexagon-shaped face" class="my-4 h-56" />
	<p class="text-center">welcome to my corner of the internet!</p>
	<a href={resolve('/projects/terrain')} class="text-center link">
		<span class="font-bold">new:</span> check out my webgpu procedural terrain generator!
	</a>
	<ul class="mt-4 w-full space-y-4">
		{#snippet link(
			href: string,
			icon: { src: string; alt: string } | { src: string; alt: string }[],
			title: string,
			subtitle: string
		)}
			<li>
				<!-- eslint-disable svelte/no-navigation-without-resolve -- these are external links -->
				<a {href} class="group card-link flex items-center gap-4">
					{#if Array.isArray(icon)}
						<img src={icon[0].src} alt={icon[0].alt} class="hidden w-12 dark:block" />
						<img src={icon[1].src} alt={icon[1].alt} class="block w-12 dark:hidden" />
					{:else}
						<img src={icon.src} alt={icon.alt} class="w-12" />
					{/if}
					<div>
						<h2 class="card-heading">
							{title}
						</h2>
						<p class="mt-2 text-taupe-500 dark:text-taupe-400">{subtitle}</p>
					</div>
				</a>
			</li>
		{/snippet}

		{@render link(
			'https://bsky.app/profile/loim.dev',
			{ src: bluesky, alt: 'BlueSky logo' },
			'@loim.dev',
			'bluesky'
		)}
		{@render link(
			'mailto:liam@loim.dev',
			{ src: mail, alt: 'ProtonMail logo' },
			'liam@loim.dev',
			'email'
		)}
		{@render link(
			'https://www.linkedin.com/in/liam-rust/',
			{ src: linkedin, alt: 'LinkedIn logo' },
			'Liam Rust',
			'linkedin'
		)}
		{@render link(
			'https://github.com/loimabean',
			[
				{ src: github_white, alt: 'GitHub logo' },
				{ src: github_black, alt: 'GitHub logo' }
			],
			'loimabean',
			'github'
		)}
		{@render link(
			'https://github.com/loimabean/loim-dev-svelte',
			{ src: git, alt: 'Git logo' },
			'loim-dev-svelte',
			'website source'
		)}
	</ul>
	<p class="mt-8 text-sm text-taupe-500 dark:text-taupe-400">
		this page has been viewed {data.hits}
		{data.hits == 1 ? 'time' : 'times'}
	</p>
</main>
