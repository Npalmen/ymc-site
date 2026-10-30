"use client";

import { useEffect, useState } from "react";

const PETALS = Array.from({ length: 12 }, (_, index) => index * 30);

export function ScrollSunflower() {
  const [bloom, setBloom] = useState(false);

  useEffect(() => {
    const target = document.getElementById("boka-slut");
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => setBloom(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`scroll-sunflower${bloom ? " is-bloomed" : ""}`} aria-hidden>
      <svg viewBox="0 0 64 64" className="scroll-sunflower-spin">
        <g className="scroll-sunflower-petals">
          {PETALS.map((angle) => (
            <ellipse key={angle} cx="32" cy="14" rx="5" ry="12" transform={`rotate(${angle} 32 32)`} />
          ))}
        </g>
        <circle cx="32" cy="32" r="8" className="scroll-sunflower-core" />
      </svg>
    </div>
  );
}
