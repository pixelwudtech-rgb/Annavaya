import crypto from "node:crypto";
import { pool } from "../db.js";

const KEY_LENGTH = 64;

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(":")) return false;

  const [salt, originalHash] = stored.split(":");

  const hash = crypto
    .scryptSync(password, salt, KEY_LENGTH)
    .toString("hex");

  return crypto.timingSafeEqual(
    Buffer.from(hash, "hex"),
    Buffer.from(originalHash, "hex")
  );
}

export async function login(req, res) {
  try {
    let { identifier, password, type } = req.body;

    if (!identifier || !password || !type) {
      return res.status(400).json({ error: "Missing credentials" });
    }

    type = type.toLowerCase(); // ✅ normalize

    const query =
      type === "email"
        ? `SELECT * FROM username WHERE email = $1`
        : `SELECT * FROM username WHERE phone = $1`;

    const { rows } = await pool.query(query, [identifier]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!verifyPassword(password, user.password)) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        username: user.username, // ✅ correct
        email: user.email,
        phone: user.phone
      }
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
