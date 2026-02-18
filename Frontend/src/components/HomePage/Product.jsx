"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function SwiperSlider() {
  /* =========================
     STATE
  ========================= */
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState({});
  const [fav, setFav] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =========================
     FETCH PRODUCTS
  ========================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);

        // Initialize quantity for each product
        const initialQty = {};
        data.forEach((p) => {
          initialQty[p.id] = 1;
        });
        setQty(initialQty);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* =========================
     QTY HANDLERS
  ========================= */
  const increase = (id) =>
    setQty((q) => ({ ...q, [id]: q[id] + 1 }));

  const decrease = (id) =>
    setQty((q) => ({ ...q, [id]: Math.max(1, q[id] - 1) }));

  /* =========================
     UI STATES
  ========================= */
  if (loading) {
    return (
      <section className="py-16 text-center text-gray-500">
        Loading products...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center text-red-500">
        {error}
      </section>
    );
  }

  /* =========================
     RENDER
  ========================= */
  return (
    <section className="relative w-full max-w-screen-2xl mx-auto py-16">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#EBE2D5] to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#EBE2D5] to-transparent z-10" />

      {/* TITLE */}
      <div className="text-center mb-10 px-2">
        <h2 className="text-[#00945A] text-2xl font-semibold">
          Most Popular Keerai Varieties
        </h2>
        <p className="mt-2 text-sm text-[#00945A]/80 max-w-lg mx-auto">
          Authentic keerai blends prepared with care for natural flavor and daily nourishment.
        </p>
      </div>

      {/* SLIDER */}
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
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] md:rounded-[3rem] rounded-[1.8rem] overflow-hidden bg-white group">

              {/* IMAGE */}
              <div className="relative h-full">
                <a href={p.link}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                {/* ❤️ WISHLIST */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFav((prev) => ({ ...prev, [p.id]: !prev[p.id] }));
                  }}
                  className="absolute top-4 left-4 z-20 flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 md:h-6 md:w-6 ${
                      fav[p.id]
                        ? "animate-heart-pop text-rose-500"
                        : "animate-heart-beat text-white"
                    }`}
                    fill={fav[p.id] ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.687-4.5
                      -1.935 0-3.597 1.126-4.313 2.733
                      -.716-1.607-2.378-2.733-4.313-2.733
                      C5.1 3.75 3 5.765 3 8.25
                      c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>

                {/* PRICE */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  ₹ {p.price}
                </div>

                {/* OVERLAY */}
                <div className="absolute bottom-0 w-full p-5 text-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="text-xs md:text-lg font-semibold">
                      {p.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-3">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-[9px] md:text-xs">
                        {p.tag}
                      </span>

                      <span className="bg-white/20 px-3 py-1 rounded-full text-[11px] md:text-xs">
                        ⭐ {p.rating}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
  onClick={() =>
    fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: p.id,
        quantity: qty[p.id],
      }),
    })
  }
  className="px-5 py-3 rounded-full bg-white/90 text-[#00945A]"
>
  Add to cart
</button>


                      <div className="ml-auto flex items-center gap-2 rounded-full border bg-white px-2 h-10 md:h-14">
                        <button onClick={() => decrease(p.id)}>-</button>
                        <span className="w-6 text-center font-semibold">
                          {qty[p.id]}
                        </span>
                        <button onClick={() => increase(p.id)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HEART ANIMATIONS */}
      <style jsx>{`
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.1); }
          40% { transform: scale(1.2); }
        }
        @keyframes heartPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .animate-heart-beat {
          animation: heartBeat 1.6s ease-in-out infinite;
        }
        .animate-heart-pop {
          animation: heartPop 0.35s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
