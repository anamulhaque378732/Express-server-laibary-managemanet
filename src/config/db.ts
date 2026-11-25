import config from ".";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: config.databaseConnection,
});
