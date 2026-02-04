"use client";

import React, { useState } from "react";

export default function StickyProductPage() {
  // Product images
  const images = [
    "/Moringa Package.png",
    "/Moringa Package.png",
    "/Moringa Package.png",
    "/Moringa Package.png",
  ];

  const [isFav, setIsFav] = useState(false);

  const [activeImage, setActiveImage] = useState(images[0]);
const [qty, setQty] = useState(1);

const increase = () => setQty((q) => q + 1);
const decrease = () => setQty((q) => Math.max(1, q - 1));


  const Stars = ({ count }) => (
    <div className="flex gap-1 text-[#F6B40E] text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.round(count) ? "★" : "☆"}</span>
      ))}
    </div>
  );
  return (
    <div className="min-h-screen py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* STICKY IMAGE SECTION */}
          <div className="md:sticky md:top-1 h-fit">
            <div className="bg-white rounded-[3rem] shadow-lg p-6">

             <div className="relative">

  {/* FAVORITE ICON */}
  <button
  onClick={() => setIsFav((v) => !v)}
  aria-label="Add to wishlist"
  className="absolute right-4 top-4 z-10
             flex h-12 w-12 items-center justify-center
             rounded-full bg-black/30 backdrop-blur
             select-none"
>
  <svg
    viewBox="0 0 24 24"
    className={`h-7 w-7 transition-transform duration-300 
      ${isFav ? "text-rose-500 scale-110 animate-heart-pop" : "text-white animate-heart-beat"}
    `}
    fill={isFav ? "currentColor" : "none"}
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

  {/* animations */}
  <style jsx>{`
    @keyframes heartPop {
      0% { transform: scale(0); }
      70% { transform: scale(1.15); }
      100% { transform: scale(1); }
    }

    @keyframes heartBeat {
      0%, 100% { transform: scale(1); }
      20% { transform: scale(1.1); }
      40% { transform: scale(1.2); }
    }

    .animate-heart-pop {
      animation: heartPop 0.35s ease-out forwards;
    }

    .animate-heart-beat {
      animation: heartBeat 1.4s ease-in-out infinite;
      filter: drop-shadow(0 0 6px rgba(225,29,72,0.6));
    }
  `}</style>
</button>


  {/* MAIN IMAGE */}
  <img
    src={activeImage}
    alt="Moringa Chutney Powder"
    className="w-full rounded-xl object-cover transition-all duration-300"
  />
  <div className="flex gap-3 md:-mt-15">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg border overflow-hidden
                      ${
                        activeImage === img
                          ? "ring-2 ring-[#129A50]"
                          : "hover:ring-2 hover:ring-gray-400"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Crunchy Egg thumbnail ${index + 1}`}
                      className="w-full h-full object-cove r"
                    />
                  </button>
                ))}
              </div>
</div>

              {/* THUMBNAILS */}
              

            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-8">

            {/* TITLE & PRICE */}
            <div>
              <h1 className="text-3xl font-semibold text-[#00945A]">
  Moringa Chutney Powder
</h1>

<p className="text-[#00945A]/80 mt-2">
  Iron-rich • Herbal goodness • Traditional superfood
</p>

<p className="text-2xl font-bold mt-4 text-black/55">
  ₹90
</p>

            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm">

  {/* Minus */}
  <button
    onClick={decrease}
    className="flex h-9 w-9 items-center justify-center rounded-full
               text-lg font-medium text-gray-600
               hover:bg-gray-100 active:scale-95 transition"
    aria-label="Decrease quantity"
  >
    −
  </button>

  {/* Quantity */}
  <span className="min-w-[28px] text-center text-sm font-semibold text-black/65">
    {qty}
  </span>

  {/* Plus */}
  <button
    onClick={increase}
    className="flex h-9 w-9 items-center justify-center rounded-full
               text-lg font-medium text-gray-600
               hover:bg-gray-100 active:scale-95 transition"
    aria-label="Increase quantity"
  >
    +
  </button>

</div>



            
 <a href="/Contact" className="animated-button  bg-black text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2 hidden md:block" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className="text">Add to Cart</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1 hidden md:block" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </a>
        <a href="/Shop" className="animated-button bg-black text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2 hidden md:block" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className="text">Buy Now</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1 hidden md:block" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </a>

             
            </div>

            {/* CONTENT */}
            <section className="space-y-6">

              {/* OVERVIEW */}
              <h2 className="text-xl font-semibold text-black/55">
  Product Overview
</h2>

<p className="text-[#00945A]/80 leading-relaxed">
  Keerai World’s Moringa Chutney Powder is a wholesome blend made from carefully
  dried moringa leaves, traditional spices, and natural ingredients. Known for
  its rich nutritional profile, moringa supports immunity, digestion, and
  overall wellness.
</p>

<p className="text-[#00945A]/80 leading-relaxed">
  Prepared using time-honored methods, the leaves are gently processed to
  preserve their natural color, aroma, and essential nutrients. The result is
  a finely balanced chutney powder that delivers both health and authentic
  flavor.
</p>

<p className="hidden md:block text-[#00945A]/80 leading-relaxed">
  Ideal as a daily side for idli, dosa, rice, or chapati, this moringa chutney
  powder adds nourishment and taste to everyday meals.
</p>


              {/* FEATURES */}
             <h2 className=" hidden md:block text-xl font-semibold mt-10 text-black/55">
  Key Features
</h2>

<ul className=" hidden md:block list-disc list-inside text-[#00945A]/80 space-y-2">
  <li >Made with premium moringa (murungai keerai) leaves</li>
  <li>Naturally rich in iron, calcium, and antioxidants</li>
  <li>Supports immunity and digestive health</li>
  <li>Prepared using traditional, hygienic methods</li>
  <li>No artificial colors or preservatives</li>
</ul>


              {/* IDEAL FOR */}
             <h2 className=" hidden md:block text-xl font-semibold mt-10 text-black/55">
  Ideal For
</h2>

<ul className=" hidden md:block list-disc list-inside text-[#00945A]/80 space-y-2">
  <li>Daily healthy meals</li>
  <li>Immunity and wellness-focused diets</li>
  <li>Traditional South Indian cooking</li>
  <li>People seeking natural nutrition</li>
</ul>


              {/* FEEDBACK */}
              <h2 className="text-xl font-semibold mt-10 text-black/55">
  Customer Feedback
</h2>

<p className="text-[#00945A]/80">
  ⭐⭐⭐⭐⭐ Customers love the fresh aroma, balanced flavor, and health benefits
  of Keerai World’s Moringa Chutney Powder, making it a trusted part of their
  daily meals.
</p>


            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
