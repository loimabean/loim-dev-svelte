import { getPosts } from '#lib/posts.js';

export async function load() {
	const posts = await getPosts();
	return { posts };
}
