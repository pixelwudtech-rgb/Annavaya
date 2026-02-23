import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Neon DB
import { pool } from "./db.js";

// Routes
import { register } from "./routes/register.js";
import { login } from "./routes/login.js";
import { getProducts } from "./routes/products.js";
import accountRoutes from "./routes/account.js";
import adminRoutes from "./routes/admin.js";
import cartRoutes from "./routes/cartRoutes.js";
import addProductRoutes from "./routes/addproducts.js";

const app = express();
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
// app.get("/api/products", getProducts);


app.use("/api/products", addProductRoutes);
/* =========================
   CART ROUTES (✅ SINGLE SOURCE)
========================= */
app.use("/api", cartRoutes);

/* =========================
   ACCOUNT ROUTES
========================= */
app.use("/api", accountRoutes);

/* =========================
   ADMIN ROUTES (🔐 PROTECTED)
========================= */
app.use("/api/admin", adminRoutes);

app.use("/api/products", addProductRoutes);

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