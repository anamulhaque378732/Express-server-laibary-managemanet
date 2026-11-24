import { pool } from "./db";

const createTbaleQuery = `
CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(25) CHECK(role IN ('admin','member')) DEFAULT 'member'

)
`;

export const initDatabase = async () => {
  await pool.query(createTbaleQuery);
  console.log("Database created");
};
