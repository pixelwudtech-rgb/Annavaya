import React from "react";

// VG Enterprises – Shop Now (Upcoming Page)
// Premium, minimal, clean front-block for an "Upcoming Shop" landing page
// Tailwind CSS required

export default function AnnavayasShopUpcoming() {
  return (
    <section className="relative w-full    opacity-90 via-white to-gray-100 px-6 lg:px-20 py-28 flex justify-center items-center text-center">
      {/* Soft Glow Background */}
     

      <div className="relative max-w-4xl flex flex-col items-center gap-6">
        <span className="px-4 py-1 text-sm font-semibold bg-[#ffd700] text-black rounded-full shadow-sm tracking-wide">
          Classic Keerai World
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-1000 leading-tight">
          Shop Now — Premium Store Experience
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mt-2">
          We're crafting something exceptional. Our new online store is almost ready.
          Expect premium-quality products, a clean shopping experience, and seamless checkout.
        </p>

        {/* UPCOMING BADGE */}
        <div className="mt-6 px-6 py-2 rounded-xl bg-yellow-100 text-yellow-800 font-medium text-sm tracking-wide">
           SHOP PAGE IS COMING SOON
        </div>


        {/* Under Construction Visual */}
        <div className="mt-14 p-10 bg-white rounded-2xl shadow-xl border max-w-md w-full">
          <h3 className="text-xl font-semibold text-gray-900">Store Launch Progress</h3>
          <p className="text-gray-600 text-sm mt-2">We are preparing an exclusive shopping experience for you.</p>

          <div className="mt-6 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-[#228b22] h-3 w-2/3 rounded-full"></div>
          </div>

          <p className="mt-3 text-sm text-[gray-500]">~ 70% Completed</p>
        </div>
      </div>
    </section>
  );
}