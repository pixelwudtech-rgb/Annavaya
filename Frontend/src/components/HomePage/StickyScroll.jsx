'use client';

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "../BlurText";
import GlobalButton from "../Menu/GlobalButton.jsx";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  useEffect(() => {
    // LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP TEXT ZOOM-OUT ANIMATION
    const heading = document.querySelector(".zoom-heading");
    const subtext = document.querySelector(".zoom-sub");

    if (heading) {
      gsap.fromTo(
        heading,
        { scale: 1.25, opacity: 1 },
        {
          scale: 1,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: heading,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (subtext) {
      gsap.fromTo(
        subtext,
        { scale: 1.05, opacity: 1 },
        {
          scale: 1,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: subtext,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <main className=" md:mt-20 ">
      <div className="wrapper">
         {/* FIRST HERO WITH ZOOM-OUT TEXT */}
        <section className="text-white md:h-screen h-screen w-full bg-[#EBE2D5] grid place-content-center sticky  relative overflow-hidden">
          
        
<h1 className="zoom-heading 2xl:text-9xl text-5xl px-8 text-center tracking-tight leading-[120%] text-[#00945A]">
  Freshness Preserved.<br /> Nutrition Delivered.
</h1>

<p className="zoom-sub text-base px-8 mt-2 text-center mt-15 tracking-tight text-[#00945A]/80">
  Keerai World brings you farm fresh leafy greens, carefully grown and gently
  handled to retain their natural nutrients.
</p>

        </section>


        <section className="bg-[#EBE2D5] text-black top-0 overflow-hidden
                    min-h-[100svh] md:h-screen grid place-content-center">
                       {/* 🔽 TOP ZIGZAG */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 20" preserveAspectRatio="none" className="w-full h-[14px] md:h-[18px]">
          <polygon
            fill="#EBE2D5"
            points="0,0 12,6 24,0 36,6 48,0 60,6 72,0 84,6 96,0 108,6 120,0 132,6 144,0 156,6 168,0 180,6 192,0 204,6 216,0 228,6 240,0 252,6 264,0 276,6 288,0 300,6 312,0 324,6 336,0 348,6 360,0 372,6 384,0 396,6 408,0 420,6 432,0 444,6 456,0 468,6 480,0 492,6 504,0 516,6 528,0 540,6 552,0 564,6 576,0 588,6 600,0 612,6 624,0 636,6 648,0 660,6 672,0 684,6 696,0 708,6 720,0 732,6 744,0 756,6 768,0 780,6 792,0 804,6 816,0 828,6 840,0 852,6 864,0 876,6 888,0 900,6 912,0 924,6 936,0 948,6 960,0 972,6 984,0 996,6 1008,0 1020,6 1032,0 1044,6 1056,0 1068,6 1080,0 1092,6 1104,0 1116,6 1128,0 1140,6 1152,0 1164,6 1176,0 1188,6 1200,0 1212,6 1224,0 1236,6 1248,0 1260,6 1272,0 1284,6 1296,0 1308,6 1320,0 1332,6 1344,0 1356,6 1368,0 1380,6 1392,0 1404,6 1416,0 1428,6 1440,0 1440,0 0,0"
          />
        </svg>
      </div>

  {/* IMAGE */}
  <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 py-5
                  aspect-[16/16] py-5 md:aspect-auto
                  md:h-[590px] md:w-600 overflow-hidden">
    <img
      src="/Home/Sticky/New/download (1).jpg"
      alt="Electrical Solutions"
      className="w-full h-full object-cover rounded-[2.5rem]"
    />
  </div>

  {/* CONTENT */}
  <div className=" px-8 py-5 text-center">


    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#00945A]">
      Moringa — Nature’s Finest Source of Nutrition
    </h2>

    <p className="mt-4  text-sm max-w-4xl mx-auto leading-relaxed text-[#00945A]/80">
      Experience the power of nature with Keerai World’s premium moringa and
  carefully selected natural superfoods. Known for its rich iron, calcium,
  antioxidants, and essential vitamins, moringa supports energy, immunity,
  and overall wellness. 
    </p>

    <div className="mt-18">
      <GlobalButton label="More Info" />
    </div>

  </div>
        </section>
        

         <section className="bg-[#EBE2D5] text-black  top-0 overflow-hidden
                    min-h-[100svh] md:h-screen grid place-content-center">
                       {/* 🔽 TOP ZIGZAG */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 20" preserveAspectRatio="none" className="w-full h-[14px] md:h-[18px]">
          <polygon
            fill="#EBE2D5"
            points="0,0 12,6 24,0 36,6 48,0 60,6 72,0 84,6 96,0 108,6 120,0 132,6 144,0 156,6 168,0 180,6 192,0 204,6 216,0 228,6 240,0 252,6 264,0 276,6 288,0 300,6 312,0 324,6 336,0 348,6 360,0 372,6 384,0 396,6 408,0 420,6 432,0 444,6 456,0 468,6 480,0 492,6 504,0 516,6 528,0 540,6 552,0 564,6 576,0 588,6 600,0 612,6 624,0 636,6 648,0 660,6 672,0 684,6 696,0 708,6 720,0 732,6 744,0 756,6 768,0 780,6 792,0 804,6 816,0 828,6 840,0 852,6 864,0 876,6 888,0 900,6 912,0 924,6 936,0 948,6 960,0 972,6 984,0 996,6 1008,0 1020,6 1032,0 1044,6 1056,0 1068,6 1080,0 1092,6 1104,0 1116,6 1128,0 1140,6 1152,0 1164,6 1176,0 1188,6 1200,0 1212,6 1224,0 1236,6 1248,0 1260,6 1272,0 1284,6 1296,0 1308,6 1320,0 1332,6 1344,0 1356,6 1368,0 1380,6 1392,0 1404,6 1416,0 1428,6 1440,0 1440,0 0,0"
          />
        </svg>
      </div>

  {/* IMAGE */}
  <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6
                  aspect-[16/16] py-5 md:aspect-auto
                  md:h-[590px] md:w-600 overflow-hidden">
    <img
      src="/Home/Sticky/New/Pirandai Thuvaiyal Recipe , Adamant Creeper Chutney Recipe.jpg"
      alt="Bathroom Solutions"
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>

  {/* CONTENT */}
  <div className="px-4 sm:px-6 py-6 text-center max-w-screen-xl mx-auto">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#00945A]">
      Veld Grape (Pirandai) Delights
    </h2>

    <p className="mt-4 text-[#00945A]/80 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
     Discover the goodness of veld grape (pirandai), a traditional superfood known
  for supporting bone strength, digestion, and overall wellness. Carefully
  prepared to retain its natural benefits, our pirandai based offerings bring
  together heritage nutrition . </p>

    <div className="mt-8">
      
      <GlobalButton label="More Info" />
    </div>

   

  </div>
</section>



         

        
         <section className="bg-white text-black grid place-content-center h-screen sticky top-0  overflow-hidden">
           <img 
      src="/WhatsApp Image 2026-01-20 at 3.14.13 PM.jpeg"
      className="absolute w-full h-full object-cover opacity-70"
      alt="Keerai World – Farm-Fresh Leafy Greens & Natural Nutrition"
    />
         
       
   <BlurText
  text="Where Freshness Meets"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-[#00945A]"
/>

<BlurText
  text="  Natural Nutrition"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-[#00945A]"
/>

<BlurText
  text="Keerai World brings you farm-fresh leafy greens, grown with care and delivered at peak freshness. Rich in natural nutrients and essential goodness."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-sm px-8 mt-5 text-center tracking-tight text-[#00945A]/80"
/>

      
        </section>
        

        <section className="text-white h-screen w-full bg-[#EBE2D5] grid place-content-center sticky top-0">
         
      

<BlurText
  text="Elevate Everyday Living With"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-[#00945A]"
/>

<BlurText
  text="Fresh Keerai & Natural Goodness"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-[#00945A]"
/>

<BlurText
  text="Keerai World brings you farm-fresh leafy greens, grown with care and delivered at peak freshness. Naturally rich in essential nutrients, our keerai supports healthy meals and balanced everyday wellness."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-sm px-8 mt-8 text-center tracking-tight text-[#00945A]/80"
/>

</section>
      </div>
     

{/* 

      <section className="text-white max-w-screen-2xl md:w-full w-[90%] bg-black">
  <div className="grid md:grid-cols-2 grid-cols-1 relative">
    

    <div className="sticky top-0 h-screen flex items-center justify-center z-20 md:z-auto">


        <BlurText
  text="Thoughtfully Crafted for Everyday Taste"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]
relative z-20 md:z-auto"
  
/>
    </div>

    
   <div className="grid gap-2 z-10 md:z-auto">

      <figure className="grid place-content-center -skew-x-12">
        <img
          src="/about/top-view-mechanical-tools-arrangement (1).jpg"
          className="transition-all duration-300 xl:w-80 xl:h-96 w-60 h-80 px-2 object-cover"
        />
      </figure>

      <figure className="grid place-content-center skew-x-12">
        <img
          src="/Home/Sticky/tu-tu-QZGQO3NvsLo-unsplash-scaled.webp"
          className="transition-all duration-300 xl:w-80 xl:h-96 w-60 h-80 px-2 object-cover"
        />
      </figure>

      <figure className="grid place-content-center -skew-x-12">
        <img
          src="/Home/Sticky/vado-digital-basin-mixer.webp"
          className="transition-all duration-300 xl:w-80 xl:h-96 w-60 h-80 px-2 object-cover"
        />
      </figure>

      <figure className="grid place-content-center skew-x-12">
        <img
          src="/Home/Sticky/claus-grunstaudl-I72dFJRFT3k-unsplash-scaled.webp"
          className="transition-all duration-300 xl:w-80 xl:h-96 w-60 h-80 px-2 object-cover"
        />
      </figure>
    </div>

  </div>
</section> */}


   <section className="text-white w-full bg-[#EBE2D5] relative ">
  <div className="grid xl:grid-cols-1 grid-cols-1 hidden md:block">

    {/* BACKGROUND IMAGE */}
    <div className="sticky top-0 h-screen">
      <div
        className="h-full w-full bg-center bg-cover bg-no-repeat  "
        style={{
          backgroundImage: "url('/Home/Sticky/New/Stickyimage.png')",
        }}
      />
    </div>

    {/* TEXT – DESKTOP (UNCHANGED) */}
    <div className="hidden md:grid sticky top-0 h-screen place-content-center max-w-6xl mx-auto px-6">
      <BlurText
        text="Keerai World delivers farm fresh leafy greens, thoughtfully grown and gently handled to preserve natural nutrients, purity, and everyday wellness."
        delay={70}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl px-8 font-bold text-right tracking-tight leading-[120%] text-[#00945A]"
      />
    </div>

    {/* TEXT – MOBILE (CENTER STICKY) */}
    {/* <div className="md:hidden inset-0 flex items-center justify-center pointer-events-none px-6">
      <BlurText
        text="Keerai World delivers farm fresh leafy greens, thoughtfully grown and gently handled to preserve natural nutrients, purity, and everyday wellness."
        delay={70}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]"
      />
    </div> */}

  </div>
</section>



     
    </main>
  );
}
