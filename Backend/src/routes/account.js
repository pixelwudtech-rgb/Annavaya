import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

/* =========================
   GET ACCOUNT (LOGGED USER)
========================= */
router.get("/account", requireAuth, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      `
      SELECT
        COALESCE(a.name, u.username) AS name,
        COALESCE(a.email, u.email) AS email,
        COALESCE(a.mobile, u.phone) AS mobile
      FROM users u
      LEFT JOIN account a ON a.user_id = u.id
      WHERE u.id = $1
      `,
      [userId]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ ACCOUNT FETCH ERROR:", err);
    res.status(500).json({ message: "Account fetch failed" });
  }
});

/* =========================
   UPDATE ACCOUNT
========================= */
router.put("/account", requireAuth, async (req, res) => {
  const { name, email, mobile } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      `
      INSERT INTO account (user_id, name, email, mobile)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (user_id)
      DO UPDATE SET
        name = EXCLUDED.name,
        email = EXCLUDED.email,
        mobile = EXCLUDED.mobile
      RETURNING name, email, mobile
      `,
      [userId, name, email, mobile]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ ACCOUNT UPDATE ERROR:", err);
    res.status(500).json({ message: "Account update failed" });
  }
});

export default router;