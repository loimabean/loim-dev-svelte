<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import bluesky from '$lib/assets/bluesky.svg';
	import github_black from '$lib/assets/github-black.svg';
	import github_white from '$lib/assets/github-white.svg';
	import mail from '$lib/assets/mail.svg';
	import linkedin from '$lib/assets/linkedin.svg';
</script>

<svelte:head>
	<title>hi, i'm liam!</title>
	<meta property="og:title" content="hi, i'm liam!" />
	<meta property="og:description" content="welcome to my corner of the internet :)" />
</svelte:head>

<main class="flex w-full max-w-xl flex-col items-center justify-center">
	<h1 class="text-4xl font-extrabold">hi, i'm liam!</h1>
	<img src={favicon} alt="an orange circle with a smiling hexagon-shaped face" class="my-4 h-56" />
	<p>welcome to my corner of the internet!</p>
	<p>i'm still working on this site, but feel free to look around :)</p>
	<ul class="mt-4 w-full space-y-4">
		<li>
			<a
				href="https://bsky.app/profile/loim.dev"
				class="group flex w-full items-center gap-4 rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
			>
				<img src={bluesky} alt="BlueSky logo" class="w-12" />
				<div>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
					>
						@loim.dev
					</h2>
					<p class="mt-2 text-taupe-700 dark:text-taupe-400">bluesky</p>
				</div>
			</a>
		</li>
		<li>
			<a
				href="mailto:liam@loim.dev"
				class="group flex w-full items-center gap-4 rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
			>
				<img src={mail} alt="ProtonMail logo" class="w-12" />
				<div>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
					>
						liam@loim.dev
					</h2>
					<p class="mt-2 text-taupe-700 dark:text-taupe-400">email</p>
				</div>
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/liam-rust-652802235/"
				class="group flex w-full items-center gap-4 rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
			>
				<img src={linkedin} alt="LinkedIn logo" class="w-12" />
				<div>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
					>
						Liam Rust
					</h2>
					<p class="mt-2 text-taupe-700 dark:text-taupe-400">linkedin</p>
				</div>
			</a>
		</li>
		<li>
			<a
				href="https://github.com/loimabean/loim-dev-svelte"
				class="group flex w-full items-center gap-4 rounded-2xl border-3 border-taupe-200 p-4 transition-all hover:bg-taupe-50 hover:shadow active:bg-taupe-50 active:shadow dark:border-taupe-800 hover:dark:bg-taupe-800 active:dark:bg-taupe-800"
			>
				<img src={github_white} alt="LinkedIn logo" class="hidden w-12 dark:block" />
				<img src={github_black} alt="LinkedIn logo" class="block w-12 dark:hidden" />
				<div>
					<h2
						class="text-2xl font-semibold transition-all group-hover:text-amber-700 group-active:text-amber-700 active:font-bold dark:group-hover:text-amber-400 dark:group-active:text-amber-400"
					>
						loimabean/loim-dev-svelte
					</h2>
					<p class="mt-2 text-taupe-700 dark:text-taupe-400">website source (on github)</p>
				</div>
			</a>
		</li>
	</ul>
</main>
