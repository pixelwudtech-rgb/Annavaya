import { useEffect, useState } from "react";
import "../ReactProject/ScrollProgress.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const CIRCUMFERENCE = 283;

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = docHeight > 0 ? scrollTop / docHeight : 0;

      setProgress(value);
      setShowTop(scrollTop > 300);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="progress-circle-container">
        <svg className="progress-circle" viewBox="0 0 100 100">
          <circle className="progress-background" cx="50" cy="50" r="45" />
          <circle
            className="progress-circle-bar"
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset:
                CIRCUMFERENCE - progress * CIRCUMFERENCE,
            }}
          />
        </svg>

        <button
          className="scroll-to-top"
          style={{
            opacity: showTop ? 1 : 0,
            pointerEvents: showTop ? "auto" : "none",
          }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          ↑
        </button>
      </div>
    </>
  );
}
