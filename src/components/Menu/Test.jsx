import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import "./Test.css";

export default function KeeraiWorldScroll() {
  const containerRef = useRef(null);

  /* ===============================
     SCROLL PROGRESS
  =============================== */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 35,
    mass: 0.9,
  });

  /* ===============================
     HERO ZOOM (ORIGINAL FEEL)
  =============================== */
  const scale = useTransform(
    smooth,
    [0, 0.5, 1], // zooms in first half, then zooms out
    [1, 2.6, 1] // close to your original zoom power
  );

  /* ===============================
     IMAGE REVEAL (LATE + SMOOTH)
  =============================== */
  const imageX = useTransform(
    smooth,
    [0.35, 1], // starts AFTER hero zoom like original
    [55, 0]
  );

  const imageXCalc = useMotionTemplate`
    max(0px, calc(${imageX}% + (${imageX}vw - 300px)))
  `;

  return (
    <main className="bg-[#129A50] text-[#1f2d1f] overflow-x-hidden">
      
      {/* ================= SCROLL CONTAINER ================= */}
      <section
        ref={containerRef}
        className="relative h-[240vh]"
      >
        {/* ================= HERO (STICKY) ================= */}
        <motion.div
          style={{ scale }}
          className="sticky top-0 h-screen grid place-items-center origin-[50%_65%] px-6"
        >
          <div className=" w-full max-w-6xl p-6">
            <div className="window-mask rounded-[2.5rem] bg-white p-10 md:p-16 shadow-xl">

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* TEXT */}
                <div>
                  <h1 className="text-4xl md:text-7xl font-semibold leading-[0.95]">
                    Pure Greens,
                    <br />
                    Honest Living
                  </h1>

                  <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-600">
                    Keerai World brings farm fresh greens crafted with
                    transparency, sustainability, and deep respect for nature.
                  </p>
                </div>

                {/* VISUAL */}
                <div className="mx-auto aspect-[4/5] w-[220px] md:w-[320px] rounded-full border border-gray-300 bg-[#eef4ef]" />
              </div>

              {/* CTA */}
              <div className="mt-10 flex gap-4">
                <button className="rounded-full bg-[#2f6f4e] px-8 py-4 text-white font-medium">
                  Explore Products
                </button>
                <button className="rounded-full border border-gray-300 px-8 py-4 font-medium">
                  Our Process
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= IMAGE REVEAL (STICKY) ================= */}
        <motion.div
          style={{ x: imageXCalc }}
          className="
            sticky top-[35%]
            mx-auto
            aspect-video
            w-[1600px]
            max-w-[92%]
            rounded-[3rem]
            bg-[#dfe8e2]
            shadow-2xl
          "
        />
      </section>

      {/* ================= BRAND WORDS ================= */}
      <section className="bg-[#f3f6f4] py-40 px-10">
        <div className="max-w-6xl mx-auto space-y-24 text-[9vw] md:text-[6vw] font-semibold leading-none">
          <p>Farm-Fresh</p>
          <p>Plant-Powered</p>
          <p>Sustainably Grown</p>
          <p>Keerai World</p>
        </div>
      </section>
    </main>
  );
}
