import app from "./app";
import config from "./config";
import { pool } from "./config/db";
import { initDatabase } from "./config/initDB";

const server = async () => {
  try {
    const time = await pool.query(`SELECT NOW()`);
    console.log("database connect successfully on : ", time.rows[0]);

    initDatabase();

    app.listen(config.port, () => {
      console.log(`Server running on Port:${config.port}`);
    });
  } catch (error: any) {
    console.log("Failed to connect server", error.message);
  }
};

server();
