"use client";

import React, { useState } from "react";

export default function StickyProductPage() {
  // Product images
  const images = [
    "/Cart/Keerai World Moringai 1.jpg",
    "/Cart/Keerai World Moringai 1.jpg",
    "/Cart/Keerai World Moringai 1.jpg",
    "/Cart/Keerai World Moringai 1.jpg",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="min-h-screen py-16 ">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* STICKY IMAGE SECTION */}
          <div className="md:sticky md:top-1 h-fit">
            <div className="bg-white rounded-2xl shadow-lg p-6">

              {/* MAIN IMAGE */}
              <img
                src={activeImage}
                alt="Crunchy Egg Snack"
                className="w-full rounded-xl object-cover transition-all duration-300"
              />

              {/* THUMBNAILS */}
              <div className="flex gap-3 mt-5">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg border overflow-hidden
                      ${
                        activeImage === img
                          ? "ring-2 ring-black"
                          : "hover:ring-2 hover:ring-gray-400"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Crunchy Egg thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-8">

            {/* TITLE & PRICE */}
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
  Moringa Chutney Powder
</h1>

<p className="text-gray-200 mt-2">
  Iron-rich • Herbal goodness • Traditional superfood
</p>

<p className="text-2xl font-bold mt-4 text-black">
  ₹199
</p>

            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
                Buy Now
              </button>
            </div>

            {/* CONTENT */}
            <section className="space-y-6">

              {/* OVERVIEW */}
              <h2 className="text-xl font-semibold">
  Product Overview
</h2>

<p className="text-gray-200 leading-relaxed">
  Keerai World’s Moringa Chutney Powder is a wholesome blend made from carefully
  dried moringa leaves, traditional spices, and natural ingredients. Known for
  its rich nutritional profile, moringa supports immunity, digestion, and
  overall wellness.
</p>

<p className="text-gray-200 leading-relaxed">
  Prepared using time-honored methods, the leaves are gently processed to
  preserve their natural color, aroma, and essential nutrients. The result is
  a finely balanced chutney powder that delivers both health and authentic
  flavor.
</p>

<p className="hidden md:block text-gray-200 leading-relaxed">
  Ideal as a daily side for idli, dosa, rice, or chapati, this moringa chutney
  powder adds nourishment and taste to everyday meals.
</p>


              {/* FEATURES */}
             <h2 className=" hidden md:block text-xl font-semibold mt-10">
  Key Features
</h2>

<ul className=" hidden md:block list-disc list-inside text-gray-200 space-y-2">
  <li >Made with premium moringa (murungai keerai) leaves</li>
  <li>Naturally rich in iron, calcium, and antioxidants</li>
  <li>Supports immunity and digestive health</li>
  <li>Prepared using traditional, hygienic methods</li>
  <li>No artificial colors or preservatives</li>
</ul>


              {/* IDEAL FOR */}
             <h2 className=" hidden md:block text-xl font-semibold mt-10">
  Ideal For
</h2>

<ul className=" hidden md:block list-disc list-inside text-gray-200 space-y-2">
  <li>Daily healthy meals</li>
  <li>Immunity and wellness-focused diets</li>
  <li>Traditional South Indian cooking</li>
  <li>People seeking natural nutrition</li>
</ul>


              {/* FEEDBACK */}
              <h2 className="text-xl font-semibold mt-10">
  Customer Feedback
</h2>

<p className="text-gray-200">
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
