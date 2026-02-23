"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function SwiperSlider() {
  /* =========================
     PRODUCTS ARRAY
  ========================= */
  const products = [
    {
      id: 1,
      tag: "Snack Box Combo",
      title: "Gongura Idli Podi | Bundle",
      price: 110,
      rating: 4.8,
      image: "/Home/Package.png",
      link: "/ProductTest",
    },
    {
      id: 2,
      tag: "Diabetic Friendly",
      title: "Veld Grape Idli Podi | Bundle",
      price: 90,
      rating: 4.7,
      image: "/Home/Package.png",
      link: "/ProductTest",
    },
    {
      id: 3,
      tag: "High Protein Combo",
      title: "Moringa Idli Podi | Bundle",
      price: 90,
      rating: 4.6,
      image: "/Home/Package.png",
      link: "/ProductTest",
    },
    {
      id: 4,
      tag: "Classic Flavor",
      title: "Gongura Cookies | Bundle",
      price: 199,
      rating: 4.7,
      image: "/Home/Package.png",
      link: "/ProductTest",
    },
  ];

  /* =========================
     STATE ✅ FIX
  ========================= */
  const [qty, setQty] = useState(
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );
  const [fav, setFav] = useState({}); // ✅ REQUIRED

  /* =========================
     QTY HANDLERS
  ========================= */
  const increase = (id) =>
    setQty((q) => ({ ...q, [id]: q[id] + 1 }));

  const decrease = (id) =>
    setQty((q) => ({ ...q, [id]: Math.max(1, q[id] - 1) }));

  /* =========================
     ADD TO CART
  ========================= */
  const addToCart = async (productId) => {
    await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,
        quantity: qty[productId],
      }),
    });

    alert("Added to cart");
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <section className="relative w-full max-w-screen-2xl mx-auto py-16">

      <Swiper
        centeredSlides
        loop
        grabCursor
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 28 },
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] rounded-[1.8rem] overflow-hidden bg-white">

              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />

              {/* WISHLIST */}
              <button
                onClick={() =>
                  setFav((prev) => ({ ...prev, [p.id]: !prev[p.id] }))
                }
                className="absolute top-4 left-4 h-8 w-8 rounded-full bg-black/30 text-white"
              >
                ♥
              </button>

              {/* PRICE */}
              <div className="absolute top-4 right-4 bg-black/30 text-white px-3 py-1 rounded-full">
                ₹ {p.price}
              </div>

              {/* OVERLAY */}
              <div className="absolute bottom-0 w-full p-5 text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="relative z-10">
                  <h3 className="font-semibold">{p.title}</h3>

                  <div className="flex gap-2 mt-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      {p.tag}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      ⭐ {p.rating}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => addToCart(p.id)}
                      className="px-5 py-3 rounded-full bg-white/90 text-[#00945A]"
                    >
                      Add to cart
                    </button>

                    <div className="ml-auto flex items-center gap-2 rounded-full bg-white px-2 h-10 text-black">
                      <button onClick={() => decrease(p.id)}>-</button>
                      <span>{qty[p.id]}</span>
                      <button onClick={() => increase(p.id)}>+</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
