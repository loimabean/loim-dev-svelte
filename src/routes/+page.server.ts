import { incrementAndGetHits } from '$lib/server/db';

export async function load() {
	const hits = incrementAndGetHits();
	return {
		hits
	};
}
