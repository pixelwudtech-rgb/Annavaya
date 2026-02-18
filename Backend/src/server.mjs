import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Neon DB
import { pool } from "./db.js";

// Routes
import { register } from "./routes/register.js";
import { login } from "./routes/login.js";
import { getProducts } from "./routes/products.js";
import { addToCart, getCart } from "./routes/cart.js";

const app = express();

// Backend runs on 3000
const PORT = process.env.PORT || 3000;

/* =========================
   MIDDLEWARES
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   HEALTH CHECK
========================= */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", backend: "running" });
});

/* =========================
   AUTH ROUTES
========================= */
app.post("/api/register", register);
app.post("/api/login", login);

/* =========================
   PRODUCTS ROUTE
========================= */
app.get("/api/products", getProducts);

/* =========================
   CART ROUTES ✅ FIX
========================= */
app.post("/api/cart", addToCart);
app.get("/api/cart", getCart);

/* =========================
   DB CONNECTION TEST
========================= */
pool.query("SELECT 1")
  .then(() => console.log("✅ Neon DB connected"))
  .catch((err) => {
    console.error("❌ Neon DB connection failed");
    console.error(err);
  });

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
