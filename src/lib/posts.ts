import { parseISO } from 'date-fns';
import path from 'path';
import type { Component } from 'svelte';

export type PostWithContent = {
	title: string;
	slug: string;
	description: string;
	date: Date;
	published: boolean;
	content: Component;
};

export type Post = Omit<PostWithContent, 'content'>;

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

function processPost(file: PostFile, slug: string, withContent: true): PostWithContent;
function processPost(file: PostFile, slug: string, withContent: false): Post;
function processPost(file: PostFile, slug: string, withContent: boolean): Post | PostWithContent {
	const post: Post = {
		...file.metadata,
		date: parseISO(file.metadata.date),
		slug: slug
	};
	if (withContent) {
		(post as PostWithContent).content = file.default;
	}
	return post;
}

export async function getPost(slug: string): Promise<PostWithContent> {
	const post: PostFile = await import(`./posts/${slug}.md`);

	return processPost(post, slug, true);
}

export async function getPosts(): Promise<Post[]> {
	const posts: Post[] = [];

	const paths = import.meta.glob<PostFile>('./posts/*.md', { eager: true });

	for (const [filePath, file] of Object.entries(paths)) {
		const slug = path.parse(filePath).name;
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const post = processPost(file, slug, false);
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts.sort((first, second) => second.date.getTime() - first.date.getTime());

	return posts;
}
