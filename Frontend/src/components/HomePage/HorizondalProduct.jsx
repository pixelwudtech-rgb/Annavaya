'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

/* -------------------------------
   PRODUCT DATA
-------------------------------- */

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

  
];

/* -------------------------------
   STAR RATING
-------------------------------- */
function Stars({ count }) {
  return (
    <div className="flex items-center gap-1 text-[#3E5B2C] text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.round(count) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

/* -------------------------------
   PRODUCT CARD
-------------------------------- */
function ProductCard({ product }) {
    const [qty, setQty] = useState(1);
    const [isFav, setIsFav] = useState(false);
 
  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => Math.max(1, q - 1)); 
  return (
    <div
      className="relative md:w-125 w-90  mx-auto"
      style={{ "--img": `url(${product.image})` }}
    >
      {/* OUTER BLUR GLOW */}
      <div className="absolute inset-0 top-4 rounded-[3rem] blur-glow"></div>

      <div className="relative rounded-[3rem] overflow-hidden bg-white group z-10">

        {/* IMAGE */}
        <div className="relative md:h-170 h-120 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

            {/* ❤️ HEART ICON WITH ANIMATION */}
                {/* ❤️ HEART ICON WITH ANIMATION */}
<button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav((v) => !v);
  }}
  aria-label="Add to wishlist"
  className="absolute top-4 left-4 z-20
             flex h-10 w-10 items-center justify-center
             rounded-full bg-black/30 backdrop-blur select-none"
>
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${
      isFav
        ? "animate-heart-pop text-rose-500"
        : "animate-heart-beat text-white"
    }`}
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
</button>

          {/* IMAGE BLUR FADE */}
          <div className="absolute inset-0 image-blur-mask pointer-events-none"></div>

          {/* PRICE */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {product.price}
          </div>

          {/* OVERLAY CONTENT */}
          <div className="absolute bottom-0 w-full p-5 text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[1px]"></div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>

             <div className="flex gap-2 mt-3 items-center">
  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
    {product.tag}
  </span>

  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
    ⭐ {product.rating}
  </span>

  {/* RIGHT – QUANTITY */}
 
</div>


              {/* CTA */}
              <div className="mt-4 flex justify-center">
                  <button className="w-auto px-5 py-3 rounded-full bg-white/90 text-[#129A50] font-medium">
                        Add to cart
                      </button>
 <div className="ml-auto h-14 w-25 flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm">
    <button
      onClick={decrease}
      className="flex h-9 w-9 items-center justify-center rounded-full
                 text-lg font-medium text-gray-600
                 hover:bg-gray-100 active:scale-95 transition"
      aria-label="Decrease quantity"
    >
      −
    </button>

    <span className="min-w-[28px] text-center text-sm font-semibold text-gray-900">
      {qty}
    </span>

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
              </div>
            </div>
          </div>
        </div>

      </div>
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
    </div>
  );
}
  

/* -------------------------------
   VIEWPORT POSITION HOOK
-------------------------------- */
function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return position;
}

/* -------------------------------
   MAIN COMPONENT
-------------------------------- */
export default function HorizontalProductScroll() {
  const scrollAreaRef = useRef(null);
  const trackRef = useRef(null);

  const position = useElementViewportPosition(scrollAreaRef);
  const { scrollYProgress } = useScroll();

  const [endX, setEndX] = useState(0);
  const SPEED = 1.5; // 🔼 increase this (1.2–2.5)

const x = useTransform(
  scrollYProgress,
  position,
  [0, endX * SPEED],
  { clamp: true }
);


  useEffect(() => {
    if (!trackRef.current) return;

    const updateWidth = () => {
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setEndX(-(totalWidth - viewportWidth));

    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section>
      {/* HEADER (STATIC – DOES NOT AFFECT SCROLL) */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-24 pt-24 pb-16 md:mb-0 -mb-40">
  <span className="inline-block text-sm tracking-wide uppercase bg-white text-[#00945A] border border-[#00945A]/20 px-4 py-1 rounded-full">
    Our Fresh Produce
  </span>

  <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00945A] tracking-tight max-w-3xl">
    Freshly Harvested Keerai, Chosen for Everyday Wellness
  </h2>

  <p className="mt-5 text-base text-[#00945A]/80 leading-relaxed max-w-2xl">
    Discover our carefully selected range of fresh, nutrient-rich keerai,
    sourced with a strong focus on purity and quality. From traditional leafy
    greens to daily cooking essentials, each variety is naturally rich in iron,
    fiber, and vital nutrients—supporting healthy meals and balanced living
    for you and your family.
  </p>
</div>


      {/* SCROLL AREA ONLY */}
      <div ref={scrollAreaRef} className="h-[280vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
         <motion.div
  ref={trackRef}
  style={{ x }}
  className="flex gap-12 pl-24 pr-0"
>

            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>

        <div className="h-[60vh]" />
      </div>
    </section>
  );
}
