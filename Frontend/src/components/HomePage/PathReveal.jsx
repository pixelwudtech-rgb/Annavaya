"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PathReveal({ d, height = "200vh" }) {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} style={{ height }} className="bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <svg
          viewBox="0 0 1120 1400" // 👈 adjusted per part
          className="w-full max-w-4xl"
          fill="none"
        >
          <path
            ref={pathRef}
            d={d}
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
