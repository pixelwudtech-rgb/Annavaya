"use client";

import { useEffect, useRef } from "react";

export default function VideoMasking() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;
    const mask = maskRef.current;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (video.readyState >= 2 && mask.readyState >= 2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Base video
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Mask
        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(mask, 0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "source-over";
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Base video */}
      <video
        ref={videoRef}
        src="/Video/keerai (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />

      {/* Mask video (WHITE on BLACK) */}
      <video
        ref={maskRef}
        src="/Video/keerai (2).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Dark premium overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Keerai World
        </h1>

        <p className="mt-4 text-white/70 max-w-xl">
          Naturally crafted premium snacks
        </p>

        <button className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold">
          Explore Products
        </button>
      </div>
    </section>
  );
}
