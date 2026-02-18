import React, { useState } from "react";

export default function StickyProductPage() {
  // Product images
  const images = [
    "/Cart/online1.jpg",
    "/Cart/online1.jpg",
    "/Cart/online1.jpg",
    "/Cart/online1.jpg",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="min-h-screen  py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* PAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* STICKY IMAGE SECTION */}
          <div className="md:sticky md:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-lg p-6">

              {/* MAIN IMAGE */}
              <img
                src={activeImage}
                alt="Classic Keerai World"
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
                      alt={`Snack thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Classic Wow Premium Crunchy Snack
              </h1>
              <p className="text-gray-500 mt-2">
                Perfectly seasoned • Freshly packed • Everyday delight
              </p>

              <p className="text-2xl font-bold mt-4 text-black">
                ₹149
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
              <h2 className="text-xl font-semibold">
                Product Overview
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Classic Wow Premium Crunchy Snack is crafted to deliver a
                perfect balance of taste, texture, and quality. Made using
                carefully selected ingredients, every bite offers a satisfying
                crunch and authentic flavor.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Prepared under strict quality standards, our snacks ensure
                freshness and consistency in every pack. Ideal for work,
                travel, or relaxing moments.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Designed for those who value premium taste, Classic Wow
                delivers quality snacking without compromise.
              </p>

              

              <h2 className="text-xl font-semibold mt-10">
                Customer Feedback
              </h2>
              <p className="text-gray-600">
                ⭐⭐⭐⭐⭐ Loved by customers for its taste, freshness,
                and consistent quality.
              </p>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
