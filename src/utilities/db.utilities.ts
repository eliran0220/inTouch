import '../config/dotenv';
import {Pool} from 'pg';
import * as process from "process";
const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_ID,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    ssl: { rejectUnauthorized: false }
});

export default db;
