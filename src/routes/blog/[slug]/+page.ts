import { getPost } from '$lib/posts.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await getPost(params.slug);
		if (!post.published) {
			error(404, `Blog not found: "${params.slug}"`);
		}
		return post;
	} catch {
		error(404, `Blog not found: "${params.slug}"`);
	}
}
