import express from "express";
import {
  addToCart,
  getCart,
  updateCartQuantity,
  deleteCartItem
} from "./cart.js";

const router = express.Router();

router.post("/cart", addToCart);
router.get("/cart", getCart);
router.put("/cart/:cartId", updateCartQuantity);
router.delete("/cart/:cartId", deleteCartItem);

export default router;