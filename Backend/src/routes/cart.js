import { pool } from "../db.js";

/* =========================
   ADD TO CART
========================= */
export const addToCart = async (req, res) => {
  console.log("🔥 ADD TO CART HIT", req.body);

  const { productId, quantity } = req.body;
  const qty = quantity && quantity > 0 ? quantity : 1;

  if (!productId) {
    return res.status(400).json({ message: "Product ID required" });
  }

  try {
    // Ensure product exists
    const product = await pool.query(
      "SELECT id FROM products WHERE id = $1",
      [productId]
    );

    if (product.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if product already in cart
    const existing = await pool.query(
      "SELECT id FROM cart WHERE product_id = $1",
      [productId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        "UPDATE cart SET quantity = quantity + $1 WHERE product_id = $2",
        [qty, productId]
      );
    } else {
      await pool.query(
        "INSERT INTO cart (product_id, quantity) VALUES ($1, $2)",
        [productId, qty]
      );
    }

    res.json({ message: "Added to cart" });
  } catch (err) {
    console.error("❌ CART DB ERROR:", err);
    res.status(500).json({ message: "Cart failed" });
  }
};

/* =========================
   GET CART
========================= */
export const getCart = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.id AS cart_id,
        c.quantity,
        p.id AS product_id,
        p.title,
        p.price,
        p.image
      FROM cart c
      JOIN products p ON c.product_id = p.id
      ORDER BY c.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("❌ FETCH CART ERROR:", err);
    res.status(500).json({ message: "Fetch cart failed" });
  }
};
