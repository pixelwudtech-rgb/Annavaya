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
        
        {/* PARALLAX BACKGROUND */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 will-change-transform"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80)",
            transform: `translateY(${scrollY * 0.35}px)`
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Premium Parallax Design
          </h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">
            Elegant motion. Clean visuals. Professional presence.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Designed With Purpose
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our parallax system is carefully tuned to create depth
              without distortion. Every image remains crisp, aligned,
              and visually balanced across all screen sizes.
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
                transform: `translateY(${scrollY * 0.11}px)`
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= PARALLAX STRIP ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1800&q=80)",
            transform: `translateY(${scrollY * 0.35}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Depth Without Distraction
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/80">
              Subtle motion enhances storytelling while preserving clarity.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
