import express from "express";
import { pool } from "../db.js";

const router = express.Router();

const TABLE_NAME = "addproducts";

/* =========================
   ADD PRODUCT
========================= */
router.post("/", async (req, res) => {
  try {
    const {
      tag,
      title,
      tagline,
      price,
      rating,
      reviews,
      image,
      bg,
      link,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO ${TABLE_NAME}
       (tag, title, tagline, price, rating, reviews, image, bg, link)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING *`,
      [
        tag,
        title,
        tagline,
        price,
        rating,
        reviews,
        image,
        bg,
        link,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
  console.error("ADD PRODUCT ERROR FULL:", err);
  res.status(500).json({
    message: "Failed to add product",
    error: err.message,
    detail: err.detail,
  });
}
});

/* =========================
   GET PRODUCTS
========================= */
router.get("/", async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM ${TABLE_NAME} ORDER BY created_at DESC`
  );
  res.json(result.rows);
});

export default router;