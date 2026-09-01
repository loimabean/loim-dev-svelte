import { incrementAndGetHits } from '#lib/server/db.js';

export async function load() {
	const hits = incrementAndGetHits();
	return {
		hits
	};
}
