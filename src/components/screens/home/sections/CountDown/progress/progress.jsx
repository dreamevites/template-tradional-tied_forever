import React, { useEffect, useState } from "react";
import styles from "./progress.module.scss";
import { useAppContext } from "@/context/AppContext";
import { useInView } from "@/custom_hooks/custom_hooks";

export default function CircleProgress({
  className = "",
  children,
  progress = 0,
}) {
  const { PREVIEW_DATA } = useAppContext();
  const duration = 0.6;
  const trailColor = PREVIEW_DATA?.css_variables?.[1]?.value;
  const size = 130;
  const strokeWidth = 14;

  const [animatedProgress, setAnimatedProgress] = useState(progress);

  const [ref, isInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    let raf;
    if (isInView) {
      raf = requestAnimationFrame(() => setAnimatedProgress(progress));
    } else {
      cancelAnimationFrame(raf);
    }

    return () => cancelAnimationFrame(raf);
  }, [progress, isInView]);

  const half = size / 2;
  const radius = half - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // clamp progress
  const pct = Math.max(0, Math.min(100, animatedProgress));
  const offset = circumference - (pct / 100) * circumference;

  // Styles for stroke animation
  const strokeStyle = {
    transition: `stroke-dashoffset ${duration}s ease`,
    transform: "rotate(-90deg)",
    transformOrigin: "50% 50%",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${styles.countDonw}`}
      style={{ width: size, height: size }}
      ref={ref}
    >
      <div className={styles.inner}>{children}</div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle (trail) */}
        <circle
          cx={half}
          cy={half}
          r={radius}
          stroke={trailColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Foreground progress circle */}
        <g style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}>
          <circle
            cx={half}
            cy={half}
            r={radius}
            stroke={"white"}
            strokeWidth={strokeWidth - 1}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={strokeStyle}
          ></circle>
        </g>
      </svg>
    </div>
  );
}
