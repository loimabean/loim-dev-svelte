import { parseISO } from 'date-fns';
import type { Component } from 'svelte';

export type PostWithContent = {
	title: string;
	slug: string;
	description: string;
	date: Date;
	published: boolean;
	content: Component;
};

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: Date;
	published: boolean;
};

type PostFile = {
	default: Component;
	metadata: PostFileMetadata;
};

type PostFileMetadata = {
	title: string;
	description: string;
	date: string;
	published: boolean;
};

function processPost(file: PostFile, slug: string): PostWithContent {
	return {
		...file.metadata,
		date: parseISO(file.metadata.date),
		slug: slug,
		content: file.default
	};
}

export async function getPost(slug: string): Promise<PostWithContent> {
	const post: PostFile = await import(`$lib/posts/${slug}.md`);

	return processPost(post, slug);
}

export async function getPosts(): Promise<Post[]> {
	const posts: Post[] = [];

	const paths = import.meta.glob<PostFile>('$lib/posts/*.md', { eager: true });

	for (const [path, file] of Object.entries(paths)) {
		const filename = path.split('/').at(-1);
		const slug = filename?.substring(0, filename.lastIndexOf('.md'));

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const post = processPost(file, slug);
			if (post.published) {
				posts.push({
					title: post.title,
					slug: post.slug,
					description: post.description,
					date: post.date,
					published: post.published
				});
			}
		}
	}

	posts.sort((first, second) => second.date.getTime() - first.date.getTime());

	return posts;
}
