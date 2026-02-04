'use client';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function SwiperSlider() {
  /* =========================
     DATA (unique IDs)
  ========================= */
  const products = [
   {
  id: 1,
  tag: "Snack Box Combo",
  title: "Gongura Idli Podi | Bundle",
  tagline:
    "Traditional gongura idli podi made with authentic spices for a bold, tangy flavor that pairs perfectly with breakfast and snacks.",
  price: "Rs. 110",
  rating: 4.8,
  reviews: 67,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 2,
  tag: "Diabetic Friendly",
  title: "Veld Grape Idli Podi | Bundle",
  tagline:
    "A wholesome veld grape idli podi crafted with carefully balanced ingredients for a light, mindful, and flavorful everyday meal.",
  price: "Rs. 90",
  rating: 4.7,
  reviews: 135,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 3,
  tag: "High Protein Combo",
  title: "Moringa Idli Podi | Bundle",
  tagline:
    "Nutrient-rich moringa idli podi blended with traditional spices to deliver a naturally protein-rich and satisfying taste.",
  price: "Rs. 90",
  rating: 4.6,
  reviews: 98,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 4,
  tag: "Classic Flavor",
  title: "Gongura Cookies | Bundle",
  tagline:
    "Crisp baked cookies infused with gongura for a unique balance of tangy flavor and traditional goodness in every bite.",
  price: "Rs. 199",
  rating: 4.7,
  reviews: 87,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 1,
  tag: "Snack Box Combo",
  title: "Gongura Idli Podi | Bundle",
  tagline:
    "Traditional gongura idli podi made with authentic spices for a bold, tangy flavor that pairs perfectly with breakfast and snacks.",
  price: "Rs. 110",
  rating: 4.8,
  reviews: 67,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 2,
  tag: "Diabetic Friendly",
  title: "Veld Grape Idli Podi | Bundle",
  tagline:
    "A wholesome veld grape idli podi crafted with carefully balanced ingredients for a light, mindful, and flavorful everyday meal.",
  price: "Rs. 90",
  rating: 4.7,
  reviews: 135,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 3,
  tag: "High Protein Combo",
  title: "Moringa Idli Podi | Bundle",
  tagline:
    "Nutrient-rich moringa idli podi blended with traditional spices to deliver a naturally protein-rich and satisfying taste.",
  price: "Rs. 90",
  rating: 4.6,
  reviews: 98,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
{
  id: 4,
  tag: "Classic Flavor",
  title: "Gongura Cookies | Bundle",
  tagline:
    "Crisp baked cookies infused with gongura for a unique balance of tangy flavor and traditional goodness in every bite.",
  price: "Rs. 199",
  rating: 4.7,
  reviews: 87,
  image: "/Home/Package.png",
  bg: "bg-white",
  link: "/ProductTest",
},
  ];

  /* =========================
     STATE
  ========================= */
  const [qty, setQty] = useState(
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );
  const [fav, setFav] = useState({});

  const increase = (id) =>
    setQty((q) => ({ ...q, [id]: q[id] + 1 }));

  const decrease = (id) =>
    setQty((q) => ({ ...q, [id]: Math.max(1, q[id] - 1) }));

  return (
    <section className="relative w-full max-w-screen-2xl mx-auto py-16">
      {/* TITLE */}

      
      {/* LEFT FADE — ✅ PERFECT PLACE */} 
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#EBE2D5] to-transparent z-10" /> 
      {/* RIGHT FADE — ✅ PERFECT PLACE */} 
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#EBE2D5] to-transparent z-10" />
    
      <div className="text-center mb-10 px-2">
        <h2 className=" text-[#00945A] text-2xl font-semibold">
          Most Popular Keerai Varieties
        </h2>
        <p className="mt-2 text-sm text-[#00945A]/80 max-w-lg mx-auto">
  Authentic keerai blends prepared with care for natural flavor and daily
  nourishment.
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
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] md:rounded-[3rem]  rounded-[1.8rem] overflow-hidden bg-white group">

              {/* IMAGE */}
              <div className="relative h-full">
                <a href={p.link}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                {/* ❤️ HEART ICON WITH ANIMATION */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFav((prev) => ({ ...prev, [p.id]: !prev[p.id] }));
                  }}
                  aria-label="Add to wishlist"
                  className="absolute top-4 left-4 z-20
                             flex md:h-10 md:w-10 h-7 w-7 items-center justify-center
                             rounded-full bg-black/30 backdrop-blur select-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`md:h-6 md:w-6 h-4 w-6 ${
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
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur text-white px-3 py-1 rounded-full md:text-sm text-xs">
                  {p.price}
                </div>

                {/* OVERLAY */}
                <div className="absolute bottom-0 w-full p-5 text-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="relative z-10">
                    <a href={p.link}>
                      <h3 className="md:text-lg text-xs font-semibold">{p.title}</h3>
                    </a>

                    <div className="flex items-center gap-2 mt-3">
                      <span className="bg-white/20 px-3 py-1 rounded-full md:text-xs text-[9px]">
                        {p.tag}
                      </span>

                      <span className="bg-white/20 px-3 py-1 rounded-full md:text-xs text-[13px]">
                        ⭐ {p.rating}
                      </span>

                     
                    </div>

                    {/* CTA */}
                       <div className="mt-4 flex justify-center ">
                      <button className="w-auto px-5 py-3 md:text-base text-xs rounded-full bg-white/90 text-[#00945A] font-medium">
                        Add to cart
                      </button>

                       <div className="ml-auto md:h-14 md:w-25 h-10 w-15  flex items-center justify-between rounded-full border border-gray-200 bg-white px-2 shadow-sm select-none">
                        <button
                          onClick={() => decrease(p.id)}
                          className="h-6 w-6 flex items-center justify-center text-gray-600"
                        >
                          -
                        </button>

                        <span className="w-6 text-center md:text-sm text-xs font-semibold text-gray-900 tabular-nums">
                          {qty[p.id]}
                        </span>

                        <button
                          onClick={() => increase(p.id)}
                          className="h-6 w-6 flex items-center justify-center text-gray-600"
                        >
                          +
                        </button>
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
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.6));
        }

        .animate-heart-pop {
          animation: heartPop 0.35s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
