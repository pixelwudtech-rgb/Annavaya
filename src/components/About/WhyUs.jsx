'use client';

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import contactAnimation from '../../assets/Lottie/Client Meeting.json';

/* =======================
   STAT CARD
======================= */
function StatCard({ value, label, para, buttonText }) {
  return (
    <div className="bg-[#f3f3f3] rounded-[2.5rem] p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-[#00945A] text-4xl font-semibold">{value}</h3>
        <p className="text-gray-700 font-medium mt-1">{label}</p>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">{para}</p>
      </div>

      {buttonText && (
        <a href="/Contact" className="animated-button bg-black text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className="text">{buttonText}</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </a>
      )}
    </div>
  );
}

/* =======================
   IMAGE CAROUSEL
======================= */
function ImageCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = track.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: 28000, easing: 'linear', iterations: Infinity }
    );

    return () => animation.cancel();
  }, []);

  const images = [
    '/about/about (1).jpeg',
    '/about/about (1).jpg',
    '/about/about (2).jpg',
    '/about/about (3).jpg',
  ];

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] bg-black">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div ref={trackRef} className="flex h-full w-max">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="h-full w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] shrink-0"
          >
            <img src={src} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =======================
   WHY US – KEERAI WORLD
======================= */
export default function WhyUs() {
  const contactRef = useRef(null);

  useEffect(() => {
    if (!contactRef.current) return;

    const anim = lottie.loadAnimation({
      container: contactRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: contactAnimation,
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-16 py-14">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ABOUT CARD */}
        <div className="bg-gray-300/40 text-[#00945A]/60 p-10 rounded-[2.5rem]">
          <span className="inline-block mb-6 rounded-full border border-white/30 px-4 py-1 text-sm">
            • About Keerai World
          </span>

          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-[#00945A]/80">
            Fresh Greens, Rooted in Trust
          </h2>

          <p className="text-[#00945A]/60 text-sm leading-relaxed">
            Keerai World is committed to delivering farm fresh leafy greens and
            traditional superfoods through responsible sourcing and careful
            handling. Our focus is on purity, consistency, and natural nutrition
            that supports healthy everyday living.
          </p>
        </div>

        <StatCard
          value="1,200+"
          label="Orders Successfully Delivered"
          para="Supplying fresh keerai and natural products to homes, retailers, and bulk buyers with consistent quality."
          buttonText="Connect With Us"
        />

        <StatCard
          value="50+"
          label="Retail & Food Service Partners"
          para="Partnering with stores, hotels, and distributors who value freshness, reliability, and responsible sourcing."
          buttonText="Partner With Keerai World"
        />
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        {/* IMAGE CAROUSEL */}
        <div className="lg:col-span-2">
          <ImageCarousel />
        </div>

        {/* TRUSTED CLIENTS */}
        <div className="bg-[#f3f3f3] rounded-[2.5rem] p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-[#00945A] text-4xl font-semibold">3,000+</h3>
            <p className="text-gray-700 font-medium mt-1">
              Homes, Chefs & Wellness Partners
            </p>

            <div className="flex justify-center items-center">
              <div ref={contactRef} className="w-45 h-auto" />
            </div>

            <div className="flex justify-center items-center mt-6">
              {[
                'https://i.pravatar.cc/40?img=7',
                'https://i.pravatar.cc/40?img=9',
                'https://i.pravatar.cc/40?img=8',
                'https://i.pravatar.cc/40?img=5',
                'https://i.pravatar.cc/40?img=3',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="customer"
                  className="h-10 w-10 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
