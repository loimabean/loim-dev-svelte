import { incrementAndGetHits } from '$lib/db';

export async function load() {
	const hits = incrementAndGetHits();
	return {
		hits
	};
}
