'use client';
import React from "react";

export default function BlobCTA() {
  return (
    <section className=" relative overflow-hidden  max-w-screen-2xl  w-[90%] rounded-[2.5rem] mx-auto mt-20 mb-20 text-black">
     {/* <img 
      src="/Home/Hero/Keerai (4).jpg"
      class="absolute w-full h-full object-cover opacity-70"
      alt="Keerai World – Farm-Fresh Leafy Greens & Natural Nutrition"
    /> */}
      <div className="  relative mx-auto max-w-5xl flex flex-col items-center gap-6 px-6 py-16 text-center md:py-20">

        {/* Blob Background */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(246,180,14,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(35,107,65,0.25),transparent_65%)] blur-3xl" />
          
        </div> */}

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#00945A]/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Trusted by Homes, Chefs & Wellness Partners

        </div>

        {/* Heading */}
       <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl leading-tight  ">
  Fresh Keerai Crafted for{" "}
  <span className="text-[#00945A]">Healthy Everyday Living</span>
</h2>


        {/* Subtext */}
        <p className="max-w-2xl text-sm text-[#00945A]/80 sm:text-base leading-relaxed">
  Keerai World brings you farm-fresh leafy greens, carefully grown and gently
  handled to preserve natural nutrients and purity. From everyday home cooking
  to restaurants and bulk supply, we focus on freshness, quality, and responsible
  sourcing delivering wholesome nutrition you can trust.
</p>


        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">

          {/* Secondary CTA */}
          <a href="/Contact" className="animated-button bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>

            <span className="text">Get in Touch</span>

            <span className="circle"></span>

            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </a>

          {/* Primary CTA */}
          <a href="/Contact" className="animated-button bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>

            <span className="text">Wholesale & Bulk Supply</span>

            <span className="circle"></span>

            <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </a>

        </div>

        {/* Trust Statement */}
        <p className="mt-4 text-xs text-[#00945A]/80">
          Farm fresh sourcing • Natural nutrition • Trusted quality
        </p>
      </div>
    </section>
  );
}
