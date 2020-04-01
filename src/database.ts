import { Pool } from 'pg';

export const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  password: 'black995',
  database: 'restapitypescript',
  port: 5432
})