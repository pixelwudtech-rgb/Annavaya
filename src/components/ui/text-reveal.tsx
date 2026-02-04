import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { useRef } from "react";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-auto", className)}>
      <div
        className="
          sticky top-0 mx-auto flex h-auto max-w-screen-2xl 
          items-center px-[1rem] py-[5rem]
        "
      >
        <span
          className="
            flex flex-wrap p-5 font-bold
            text-3xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl
            md:p-8 lg:p-10
          "
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            // ✅ FIX: reverse word timing (top → bottom)
            const range: [number, number] = [1 - end, 1 - start];

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={range}
              >
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // White reveals on scroll UP
  const opacity = useTransform(progress, range, [1, 0]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      {/* Base ghost text */}
      <span className="absolute opacity-10">
        {children}
      </span>

      {/* Revealing text */}
      <motion.span
        style={{ opacity }}
        className="text-[#00945A]"
      >
        {children}
      </motion.span>
    </span>
  );
};
