import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/admin.js";

const router = express.Router();

router.get(
  "/dashboard",
  requireAuth,    // 1️⃣ checks JWT
  requireAdmin,  // 2️⃣ checks role === admin
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin Dashboard ",
      admin: req.user
    });
  }
);

export default router;