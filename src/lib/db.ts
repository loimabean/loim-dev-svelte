import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';
import path from 'path';

const dbPath = env.DB_PATH || '/data';
const db = new Database(path.join(dbPath, 'site-data.db'));

db.exec(`
      CREATE TABLE IF NOT EXISTS hits (
          id INTEGER PRIMARY KEY CHECK (id = 1),
          count INTEGER NOT NULL DEFAULT 0
      )
  `);
db.exec(`INSERT OR IGNORE INTO hits (id, count) VALUES (1, 0)`);

export function incrementAndGetHits(): number {
	const query = db.prepare(`UPDATE hits SET count = count + 1 WHERE id = 1 RETURNING count`);
	const result = query.get() as { count: number };
	return result.count;
}
