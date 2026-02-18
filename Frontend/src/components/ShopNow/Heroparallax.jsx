import React, { useEffect, useState } from "react";

export default function ParallaxPremium() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* 🔽 TOP ZIGZAG */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 20" preserveAspectRatio="none" className="w-full h-[14px] md:h-[18px]">
          <polygon
            fill="#EBE2D5"
            points="0,0 12,6 24,0 36,6 48,0 60,6 72,0 84,6 96,0 108,6 120,0 132,6 144,0 156,6 168,0 180,6 192,0 204,6 216,0 228,6 240,0 252,6 264,0 276,6 288,0 300,6 312,0 324,6 336,0 348,6 360,0 372,6 384,0 396,6 408,0 420,6 432,0 444,6 456,0 468,6 480,0 492,6 504,0 516,6 528,0 540,6 552,0 564,6 576,0 588,6 600,0 612,6 624,0 636,6 648,0 660,6 672,0 684,6 696,0 708,6 720,0 732,6 744,0 756,6 768,0 780,6 792,0 804,6 816,0 828,6 840,0 852,6 864,0 876,6 888,0 900,6 912,0 924,6 936,0 948,6 960,0 972,6 984,0 996,6 1008,0 1020,6 1032,0 1044,6 1056,0 1068,6 1080,0 1092,6 1104,0 1116,6 1128,0 1140,6 1152,0 1164,6 1176,0 1188,6 1200,0 1212,6 1224,0 1236,6 1248,0 1260,6 1272,0 1284,6 1296,0 1308,6 1320,0 1332,6 1344,0 1356,6 1368,0 1380,6 1392,0 1404,6 1416,0 1428,6 1440,0 1440,0 0,0"
          />
        </svg>
      </div>
        
        {/* PARALLAX BACKGROUND */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 will-change-transform"
          style={{
            backgroundImage: "url('/about/about (1).jpeg')",
            transform: `translateY(${scrollY * 0.35}px)`
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
    A Thoughtful Journey, Rooted in
  <br className="hidden md:block" />
  Natural Goodness

</h1>

<p className="mt-5 max-w-2xl text-white/80 text-lg">
  From farm sourcing to careful handling and delivery, every detail reflects
  our commitment to freshness, purity, and everyday wellness at Keerai World.
</p>


        </div>
         {/* 🔼 BOTTOM ZIGZAG */}
      <div className="absolute bottom-0 left-0 w-full z-20 rotate-180 pointer-events-none">
        <svg viewBox="0 0 1440 20" preserveAspectRatio="none" className="w-full h-[14px] md:h-[18px]">
          <polygon
            fill="#EBE2D5"
            points="0,0 12,6 24,0 36,6 48,0 60,6 72,0 84,6 96,0 108,6 120,0 132,6 144,0 156,6 168,0 180,6 192,0 204,6 216,0 228,6 240,0 252,6 264,0 276,6 288,0 300,6 312,0 324,6 336,0 348,6 360,0 372,6 384,0 396,6 408,0 420,6 432,0 444,6 456,0 468,6 480,0 492,6 504,0 516,6 528,0 540,6 552,0 564,6 576,0 588,6 600,0 612,6 624,0 636,6 648,0 660,6 672,0 684,6 696,0 708,6 720,0 732,6 744,0 756,6 768,0 780,6 792,0 804,6 816,0 828,6 840,0 852,6 864,0 876,6 888,0 900,6 912,0 924,6 936,0 948,6 960,0 972,6 984,0 996,6 1008,0 1020,6 1032,0 1044,6 1056,0 1068,6 1080,0 1092,6 1104,0 1116,6 1128,0 1140,6 1152,0 1164,6 1176,0 1188,6 1200,0 1212,6 1224,0 1236,6 1248,0 1260,6 1272,0 1284,6 1296,0 1308,6 1320,0 1332,6 1344,0 1356,6 1368,0 1380,6 1392,0 1404,6 1416,0 1428,6 1440,0 1440,0 0,0"
          />
        </svg>
      </div>
      </section>

      

      

      
    </div>
  );
}
