import { error } from '@sveltejs/kit';
import { parseISO } from 'date-fns';

export async function load({ params }) {
	try {
		const post = await import(`$posts/${params.slug}.md`);

		return {
			content: post.default,
			metadata: {
				...post.metadata,
				date: parseISO(post.metadata.date)
			}
		};
	} catch {
		error(404, `Blog not found: "${params.slug}"`);
	}
}
