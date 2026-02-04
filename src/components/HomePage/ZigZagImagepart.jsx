import React from "react";
import GlobalButton from "../Menu/GlobalButton.jsx";

export default function ProductBanner() {
  return (
    <section className="relative w-full overflow-hidden block md:hidden">


      {/* CONTENT WRAPPER (SPACE CONTROL HERE) */}
      <div className="">
        
        {/* BANNER */}
        <div className="relative w-full h-[600px] sm:h-[440px] md:h-[520px] lg:h-[1080px] flex items-center justify-center z-10 -mb-10">
          
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/Home/midmountain.png')",
            }}
          />

          {/* Overlay */}
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6 mt-50">
            <div className="max-w-2xl">
  <h2 className="text-white text-xs  font-semibold">
    Fresh Keerai for Daily Energy & Natural Strength
  </h2>
  <p className="mt-4 text-white/90 text-[10px] ">
    Grown with care, harvested at the right time, and naturally rich in iron,
  fiber, and essential nutrients  supporting everyday energy, immunity,
  and balanced wellness.
  </p>

 <div className="mt-8">
      <GlobalButton label="More Info" />
    </div>



</div>

          </div>
        </div>
      </div>

     
    </section>
  );
}
