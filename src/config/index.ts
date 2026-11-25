import dontenv from "dotenv";
import path from "path";

dontenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseConnection: process.env.DATABASE_URL,
  JWTAccessToken: process.env.JWT_ACCCESS_SECRET,
};

export default config;
