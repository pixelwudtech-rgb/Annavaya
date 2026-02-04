"use client";
import React from "react";
import { motion } from "motion/react";

export function TestimonialsColumn({
  className = "",
  testimonials = [],
  duration = 12,
}) {
  // HARD GUARD (important)
  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={String(className)}>
      <motion.div
        style={{ willChange: "transform" }}
        animate={{ y: "-50%" }}
        transition={{
          duration: Number(duration),
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((loopIndex) => (
          <React.Fragment key={loopIndex}>
            {testimonials.map((item, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className="max-w-sm w-full rounded-2xl 
                           bg-white border border-white/10 
                           p-6 shadow-lg shadow-black/40"
              >
                <p className="text-sm text-black/80 leading-relaxed">
                  {item.text}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>
                    <div className="text-sm font-medium text-black">
                      {item.name}
                    </div>
                    <div className="text-xs text-black/50">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
