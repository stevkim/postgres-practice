import 'dotenv/config';
import pg from 'pg';
import { log } from '../logs/logger';

const { Pool } = pg;

const pgConfig = {
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	max: 100,
};

const db = new Pool(pgConfig);

export const query = async (text: string, params?: any) => {
	const start = Date.now();
	const res = await db.query(text, params);
	const duration = Date.now() - start;
	log({ text, duration, rows: res.rowCount });
	return res;
};
