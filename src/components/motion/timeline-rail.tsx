"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "@/components/motion/count-up";

type Item = { year: string; tag: string; title: string; body: string };

export function TimelineRail({ items }: { items: readonly Item[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      line.style.transform = "scaleY(1)";
      return;
    }
    let frame = 0;
    const update = () => {
      const rect = list.getBoundingClientRect();
      const traveled = Math.min(rect.height, Math.max(0, window.innerHeight * 0.62 - rect.top));
      const progress = rect.height > 0 ? Math.min(1, traveled / rect.height) : 0;
      line.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative mt-10">
      <span ref={lineRef} className="timeline-line" aria-hidden />
      {items.map((item) => {
        const year = Number(item.year);
        const countable = Number.isInteger(year) && String(year) === item.year;
        return (
          <li key={item.title} className="timeline-item relative pb-10 pl-10 last:pb-0">
            <span className="timeline-node" aria-hidden />
            <p className="nums font-sans text-2xl font-semibold text-accent">
              {countable ? <CountUp value={year} /> : item.year}
            </p>
            <p className="mt-2 inline-flex min-h-7 items-center rounded-[var(--radius-pill)] border border-border bg-surface px-2.5 text-[0.75rem] font-medium">
              {item.tag}
            </p>
            <h3 className="mt-3 font-sans text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-body text-ink-muted">{item.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
