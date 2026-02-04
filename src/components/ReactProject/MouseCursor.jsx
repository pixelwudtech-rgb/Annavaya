"use client";

import { useEffect, useRef } from "react";

export default function KeeraiCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          rotate(-22deg)
        `;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    const grow = () =>
      cursorRef.current?.classList.add("scale-125");
    const shrink = () =>
      cursorRef.current?.classList.remove("scale-125");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* 🌿 Keerai Leaf Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]
        w-10 h-14
        transition-transform duration-300 ease-out
        -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 120 200"
          className="w-full h-full drop-shadow-[0_10px_18px_rgba(31,175,99,0.35)]"
          fill="none"
        >
          <defs>
            <linearGradient id="leafGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#08833bc5" />
              <stop offset="100%" stopColor="#0E7C43" />
            </linearGradient>
          </defs>

          {/* Leaf Shape */}
          <path
            d="
              M60 5
              C100 40 110 95 75 150
              C65 170 55 185 60 195
              C45 180 25 150 20 110
              C15 60 35 25 60 5
            "
            fill="url(#leafGradient)"
          />
        </svg>
      </div>

      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]
        w-1.5 h-1.5 rounded-full bg-[#E6FFF2]
        -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
