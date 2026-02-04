'use client';

import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'motion/react';
import { wrap } from '@motionone/utils';
import { cn } from '@/lib/utils';

export default function ScrollBaseAnimation({
  children,
  baseVelocity = -4.5,
  clasname,
  scrollDependent = true,
  delay = 0,
}) {
  /* =========================
     MOTION VALUES
  ========================= */
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  /* =========================
     PREMIUM SPRING (INERTIA)
  ========================= */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 70,
    stiffness: 250,
    mass: 0.8,
  });

  /* =========================
     NON-LINEAR VELOCITY MAP
  ========================= */
  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-2, 0, 2],
    { clamp: false }
  );

  /* =========================
     WRAPPED X POSITION
  ========================= */
  const x = useTransform(baseX, (v) => `${wrap(-45, -20, v)}%`);

  const directionFactor = useRef(1);
  const hasStarted = useRef(false);

  /* =========================
     DELAYED START (OPTIONAL)
  ========================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  /* =========================
     RAF LOOP (BUTTERY SMOOTH)
  ========================= */
  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy =
      directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      const vf = velocityFactor.get();

      // Prevent jitter near zero
      if (Math.abs(vf) > 0.15) {
        directionFactor.current = vf > 0 ? 1 : -1;
      }

      const cappedVelocity = Math.min(Math.abs(vf), 1.8);
      moveBy +=
        directionFactor.current * moveBy * cappedVelocity;
    }

    /* Micro-damping (LERP) */
    const current = baseX.get();
    const next = current + moveBy;

    baseX.set(current + (next - current) * 0.85);
  });

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex whitespace-nowrap gap-10"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={cn(
              "block font-semibold uppercase tracking-[0.22em] leading-snug",
              "text-transparent",
              "[-webkit-text-stroke:1.5px_#00945A]",
              "text-[clamp(1.4rem,4vw,3.4rem)]",
              "font-sans",
              clasname
            )}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
