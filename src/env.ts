import { defineEnvVars } from '@sveltejs/kit/env';
import * as v from 'valibot';

export const variables = defineEnvVars({
	DB_PATH: {
		public: false,
		description: 'The path to the folder in which the SQLite database will be stored.',
		schema: v.pipe(v.optional(v.string(), '/data'), v.trim(), v.nonEmpty())
	}
});
