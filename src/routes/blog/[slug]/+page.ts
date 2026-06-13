import { getPost } from '$lib/posts';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const post = await getPost(params.slug).catch(() =>
		error(404, `Blog not found: "${params.slug}"`)
	);
	if (!post.published) error(404, `Blog not found: "${params.slug}"`);
	return post;
}
