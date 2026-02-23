"use client";

import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =========================
     FETCH CART
  ========================= */
  useEffect(() => {
  const fetchCart = async () => {
    try {
      const API = import.meta.env.PUBLIC_API_BASE_URL;
      const token = localStorage.getItem("token");

      if (!API) {
        console.warn("PUBLIC_API_BASE_URL is not defined");
        return;
      }

      const res = await fetch(`${API}/api/cart`, {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      // 🔐 Not logged in / token expired
      if (res.status === 401) {
        localStorage.clear();
        setCart([]);
        return;
      }

      if (!res.ok) {
        throw new Error("Failed to fetch cart");
      }

      const data = await res.json();
      setCart(data);
    } catch (err) {
      setError(err.message || "Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  fetchCart();
}, []);

  /* =========================
     UPDATE QUANTITY
  ========================= */
  const updateQuantity = async (cartId, newQty) => {
  try {
    const API = import.meta.env.PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    if (!API) {
      console.warn("PUBLIC_API_BASE_URL is not defined");
      return;
    }

    const res = await fetch(`${API}/api/cart/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ quantity: newQty }),
    });

    // 🔐 Not logged in / token expired
    if (res.status === 401) {
      localStorage.clear();
      window.location.href = "/LogIn";
      return;
    }

    if (!res.ok) {
      throw new Error("Update failed");
    }

    // 🗑️ If qty <= 0, backend deletes item
    if (newQty <= 0) {
      setCart((prev) => prev.filter((i) => i.cart_id !== cartId));
      return;
    }

    // 🔄 Update UI quantity
    setCart((prev) =>
      prev.map((item) =>
        item.cart_id === cartId
          ? { ...item, quantity: newQty }
          : item
      )
    );
  } catch (err) {
    console.error("Update quantity failed:", err);
  }
};

  /* =========================
     DELETE ITEM
  ========================= */
  const removeItem = async (cartId) => {
  try {
    const API = import.meta.env.PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    if (!API) {
      console.warn("PUBLIC_API_BASE_URL is not defined");
      return;
    }

    const res = await fetch(`${API}/api/cart/${cartId}`, {
      method: "DELETE",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    // 🔐 Not logged in / token expired
    if (res.status === 401) {
      localStorage.clear();
      window.location.href = "/LogIn";
      return;
    }

    if (!res.ok) {
      throw new Error("Remove item failed");
    }

    // 🧹 Update UI
    setCart((prev) =>
      prev.filter((item) => item.cart_id !== cartId)
    );
  } catch (err) {
    console.error("Remove item failed:", err);
  }
};

  /* =========================
     UI STATES
  ========================= */
  if (loading) return <p className="p-6 text-center">Loading cart…</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;
  if (cart.length === 0)
    return <p className="p-6 text-center">Your cart is empty.</p>;

  /* =========================
     TOTAL
  ========================= */
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* =========================
     RENDER
  ========================= */
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.cart_id}
            className="flex items-center gap-4 border rounded-lg p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">₹ {item.price}</p>

              {/* QUANTITY */}
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.cart_id, item.quantity - 1)
                  }
                  className="h-8 w-8 border rounded"
                >
                  −
                </button>

                <span className="w-6 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.cart_id, item.quantity + 1)
                  }
                  className="h-8 w-8 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* PRICE + REMOVE */}
            <div className="text-right">
              <p className="font-semibold mb-2">
                ₹ {item.price * item.quantity}
              </p>
              <button
                onClick={() => removeItem(item.cart_id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-bold">₹ {grandTotal}</span>
      </div>

      {/* CHECKOUT */}
      <button className="mt-6 w-full py-3 bg-[#00945A] text-white rounded-lg">
        Proceed to Checkout
      </button>
    </section>
  );
}