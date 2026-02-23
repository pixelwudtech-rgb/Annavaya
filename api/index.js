import express from "express";
import cors from "cors";

// import routes from Backend
import { register } from "../Backend/src/routes/register.js";
import { login } from "../Backend/src/routes/login.js";
import accountRoutes from "../Backend/src/routes/account.js";
import adminRoutes from "../Backend/src/routes/admin.js";
import cartRoutes from "../Backend/src/routes/cartRoutes.js";
import addProductRoutes from "../Backend/src/routes/addproducts.js";

// DB
import { pool } from "../Backend/src/db.js";

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   HEALTH
========================= */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", backend: "running" });
});

/* =========================
   AUTH
========================= */
app.post("/api/login", login);
app.post("/api/register", register);

/* =========================
   PRODUCTS
========================= */
app.use("/api/products", addProductRoutes);

/* =========================
   CART
========================= */
app.use("/api", cartRoutes);

/* =========================
   ACCOUNT
========================= */
app.use("/api", accountRoutes);

/* =========================
   ADMIN
========================= */
app.use("/api/admin", adminRoutes);

/* =========================
   DB CHECK (cold start)
========================= */
pool.query("SELECT 1").catch(console.error);

/* =========================
   ❌ NO app.listen
   ✅ EXPORT ONLY
========================= */
export default app;