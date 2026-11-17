"use client";

// Live call duration in the hero mockup: it starts where the static HTML shows it (02:14)
// and ticks every second. Frozen when the visitor asks for reduced motion.
import { useEffect, useState } from "react";

export function CallTimer({ start = 134 }: { start?: number }) {
  const [seconds, setSeconds] = useState(start);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return (
    <span className="tabular-nums">
      {mm}:{ss}
    </span>
  );
}
