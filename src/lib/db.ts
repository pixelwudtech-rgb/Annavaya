import pkg from "pg";
const { Pool } = pkg;

const connectionString = import.meta.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // REQUIRED for Neon
  },
});
