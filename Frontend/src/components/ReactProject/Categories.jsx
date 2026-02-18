// src/components/SwiperSlider.tsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, FreeMode } from "swiper/modules";



import "swiper/css";
import "swiper/css/effect-coverflow";
import "../ReactProject/Categories.css";

export default function SwiperSlider() {
  const slides = [
 
  
  { image: "/Home/Cate/keeraileaf.jpg", title: "Moringa Leaves" },
  { image: "/Home/Cate/powder.jpeg", title: "Herbal Powders" },
 
  { image: "/Home/Cate/Cookies.jpg", title: "Healthy Cookies" },
  
  
  
  { image: "/Home/Cate/keeraileaf.jpg", title: "Moringa Leaves" },
  { image: "/Home/Cate/powder.jpeg", title: "Herbal Powders" },
 
  { image: "/Home/Cate/Cookies.jpg", title: "Healthy Cookies" },
  
  
  { image: "/Home/Cate/keeraileaf.jpg", title: "Moringa Leaves" },
  { image: "/Home/Cate/powder.jpeg", title: "Herbal Powders" },
 
  { image: "/Home/Cate/Cookies.jpg", title: "Healthy Cookies" },
];


  /* Smooth reveal */
  useEffect(() => {
    const el = document.querySelector(".fade-zoom");
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el?.classList.add("show"),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="fade-zoom w-full max-w-screen-2xl mx-auto  py-20">
      <h2 className="text-4xl md:text-5xl text-center font-semibold text-[#00945A] mb-6 px-4">
        Our Keerai Varieties
      </h2>

      <p className="text-center  max-w-3xl mx-auto mb-16 leading-relaxed px-2 text-[#00945A]/80">
        A calm, carefully curated range of premium snacks  crafted for clean
        nutrition and everyday balance.
      </p>

      <div className="relative">
        {/* LEFT FADE */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#EBE2D5] to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#EBE2D5] to-transparent z-10" />

        <Swiper
          modules={[EffectCoverflow, Autoplay, FreeMode]}
          loop
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          centeredSlides
          grabCursor={false}
          speed={2000} // 🎬 slow cinematic glide
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
             pauseOnMouseEnter: true, // ✅ THIS is what you want
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          className="py-16"
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 32 },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
          <div className="relative w-full h-35 md:h-[320px] rounded-4xl overflow-hidden shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
              loading="lazy"
            />

            {/* Title inside image */}
            <div className="absolute inset-x-0 bottom-0  px-4 py-3">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-7 px-4 py-3 "></div>  
              <p className="text-gray-900 text-xs md:text-lg font-medium text-center  ">
                {item.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
