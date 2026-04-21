<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>about me</title>
	<meta property="og:title" content="about" />
	<meta
		property="og:description"
		content="information about me, liam! (the creator of this site)"
	/>
</svelte:head>

<main class="max-w-xl">
	<h1 class="mb-4 text-4xl font-extrabold">about</h1>
	<article class="prose text-justify hyphens-auto prose-taupe dark:prose-invert">
		<h2>
			i'm <strong class="text-amber-700 dark:text-amber-400">liam rust!</strong>
			<span class="text-taupe-500 dark:text-taupe-400">(he/she/they)</span>
		</h2>
		<p>
			i'm a {data.age} year old graduate computer science student at Stevens Institute of Technology.
		</p>
		<figure class="flex flex-col items-center">
			<enhanced:img
				src="$lib/assets/me.jpg"
				alt="A smiling androgynous person in a motorized wheelchair with their hand making a peace sign. They are wearing all orange. They have medium-long, dirty blonde hair, round gold glasses, and hexagon earrings."
				class="w-lg rounded-xl"
			/>
			<figcaption class="italic">that's me!</figcaption>
		</figure>
		<p>i'm passionate about a lot of things. in no particular order, here's a few:</p>
		<h3>software</h3>
		<p>
			software is my profession after all, so i'd better like it at least a little bit. lucky for
			me, i love software! i love writing it, tinkering with it, playing around with it,
			contributing to it, learning about it, and everything in between. i think it's one of the most
			powerful, yet accessible things. (when wielded correctly…)
		</p>
		<p>
			i first started programming in high school, after being glued to my computer since i was a
			kid. like many people, i got my start with modding games like minecraft and kerbal space
			program. i still do a lot of minecraft — the server this website is running on has a few
			minecraft servers on it as well!
		</p>
		<p>
			something i have discovered as i've learned and done more programming is i love to do software
			Right™. i'm not one to do hacky workarounds unless it's the last resort. and even then, i keep
			my eyes peeled for the true fix. coincidentally, my last name is Rust, and i enjoy the
			programming language Rust.
			<span role="note" class="text-taupe-500 dark:text-taupe-400"
				>(no, this site is not written in Rust)</span
			>
		</p>
		<p>
			i find myself doing a lot of different kinds of software work, such as web development (see:
			this website), lower-level systems programming, systems administration / DevOps things like
			containerization and configuration, and user interface design work. i'm sure i'll do even more
			as time goes on — i'm a bit of a jack of all trades!
		</p>
		<h3>open source software</h3>
		<p>
			in particular, i am passionate about open source software. i use linux <a
				href="https://fedoraproject.org/workstation/">(fedora workstation)</a
			>
			on all of my devices, and prefer to use open source software when it is possible. i find it beautiful
			just how much is shared to the world <em>for free</em> for the sole purpose of helping others. i
			hope to be able to contribute to that as much as i can.
		</p>
		<p>
			<a href="https://github.com/loimabean/loim-dev-svelte"
				>this website is licensed under the AGPLv3!</a
			>
		</p>
		<h3>music</h3>
		<p>
			i'm a singer! i've been singing since longer than i can remember. i'm a very musical person,
			almost always with a song stuck in my head.
		</p>
		<p>
			current favorite artists include <a href="https://jamies.page/">jamie paige</a>,
			<a href="https://flavorfoley.com/">flavor foley</a>, and
			<a href="https://goodkidofficial.com/">good kid</a>, the last of which i just saw on tour as
			of writing this! current favorite songs from each of those artists respectively are
			<a href="https://jamiepaige.bandcamp.com/track/clouddrop">clouddrop</a>,
			<a href="https://flavorfoley.bandcamp.com/track/human">human</a>, and
			<a href="https://goodkid.bandcamp.com/track/cicada-2">cicada</a>.
		</p>
		<p>
			weirdly, i only really started actively listening to music in the past couple of years. so i'm
			sure more will be added as time goes on!
		</p>
		<h3>urban design &amp; transit</h3>
		<p>
			as someone with a disability who can't drive a car, i've come to appreciate well-designed
			cities, and particularly cities that allow you to get around car-free. as you might be able to
			see in the photo of me above, i'm right by new york city at the moment! despite the
			not-uncommon issues i may have with its transit accessibility, living in an area where i can
			get around on my own has been so empowering. not to mention all of the fascinating history and
			communities of the region!
		</p>
		<h3>design in general</h3>
		<p>
			i find design fascinating. all of the little details that you barely think about that subtly
			influence your experiences. i got into software partially because of design, and it's still a
			big part of what i like about software (when i'm working on things that the user can see, at
			least). this website is one of my bigger projects in terms of design, so i hope you like it!
		</p>
		<h3>more…</h3>
		<p>
			it's so hard to condense everything about myself to this about section. more will probably be
			added as time goes on! and i'm sure more will also be on my <a href={resolve('/blog')}
				>blog!</a
			>
		</p>
		<h2>what is this website?</h2>
		<p>
			this website is a reflection of me! at the moment, it's my personal space on the internet,
			where i can write things and people can see who i am and what i do. (hello, people!)
		</p>
		<p>hopefully, there will be more shenanigans here soon. thanks for visiting!</p>
	</article>
</main>
