import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import 'dotenv/config';

const dbUrl = process.env.DATABASE_URL;
const pool = new Pool({
	connectionString: dbUrl,
});

const seedQuery = fs.readFileSync(path.join(__dirname, 'seeding.sql'), {
	encoding: 'utf8',
});

pool.query(seedQuery, (err, res) => {
	console.log(err, res);
	console.log('Seeding completed');
	pool.end();
});
