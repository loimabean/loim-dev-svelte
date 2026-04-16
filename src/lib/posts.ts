import { parseISO } from 'date-fns';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: Date;
	published: boolean;
};

export async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const filename = path.split('/').at(-1);
		const slug = filename?.substring(0, filename.lastIndexOf('.md'));

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as PostMetadata;
			const post = { ...metadata, date: parseISO(metadata.date), slug } as Post;
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((first, second) => second.date.getTime() - first.date.getTime());

	return posts;
}

type PostMetadata = {
	title: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
};
