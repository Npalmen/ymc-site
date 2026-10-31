"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <Image
        src="/brand/mark-320.webp"
        alt=""
        width={320}
        height={328}
        className="scroll-sunflower-spin"
      />
    </div>
  );
}
