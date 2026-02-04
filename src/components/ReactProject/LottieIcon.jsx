"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieIcon({ animationData, size = 120 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, [animationData]);

  return (
    <foreignObject x="0" y="0" width={size} height={size}>
      <div
        ref={ref}
        style={{ width: size, height: size }}
      />
    </foreignObject>
  );
}
