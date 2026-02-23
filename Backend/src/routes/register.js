import crypto from "node:crypto";
import { pool } from "../db.js";

const SALT_LENGTH = 16;
const KEY_LENGTH = 64;

function hashPassword(password) {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");
  const hash = crypto.scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

export async function register(req, res) {
  try {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const hashedPassword = hashPassword(password);

  await pool.query(
  `INSERT INTO users (username, email, phone, password)
   VALUES ($1, $2, $3, $4)`,
  [username, email, phone, hashedPassword]
);



    return res.status(201).json({ success: true });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    if (err.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
}
