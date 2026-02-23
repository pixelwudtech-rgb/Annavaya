import crypto from "node:crypto";
import { pool } from "../db.js";
import { signToken } from "../utils/jwt.js";

const KEY_LENGTH = 64;

/* =========================
   PASSWORD VERIFY
========================= */
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

/* =========================
   LOGIN CONTROLLER
========================= */
export async function login(req, res) {
  try {
    const { identifier, password, type } = req.body;

    /* 🔒 VALIDATION */
    if (!identifier || !password || !type) {
      return res.status(400).json({
        error: "Missing login credentials"
      });
    }

    const loginType = type.toLowerCase();

    if (!["email", "phone"].includes(loginType)) {
      return res.status(400).json({
        error: "Invalid login type"
      });
    }

    /* 🔍 FETCH USER */
    const query =
      loginType === "email"
        ? "SELECT * FROM users WHERE email = $1"
        : "SELECT * FROM users WHERE phone = $1";

    const { rows } = await pool.query(query, [identifier]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({
        error: "User not found"
      });
    }

    /* 🔐 VERIFY PASSWORD */
    const isValid = verifyPassword(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        error: "Invalid password"
      });
    }

    /* 🔑 CREATE JWT */
    const token = signToken({
      id: user.id,
      role: user.role
    });

    /* ✅ SUCCESS RESPONSE */
    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });

  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);
    return res.status(500).json({
      error: "Internal server error"
    });
  }
}