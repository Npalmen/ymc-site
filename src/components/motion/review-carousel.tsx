"use client";

import { useRef } from "react";

type ReviewItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating?: number | null;
  placeholder?: boolean;
};

export function ReviewCarousel({ items }: { items: ReviewItem[] }) {
  const scroller = useRef<HTMLUListElement>(null);

  function move(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("li");
    const amount = (card?.offsetWidth ?? node.clientWidth) + 16;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="mt-10">
      <ul
        ref={scroller}
        className="review-scroller flex list-none gap-4 overflow-x-auto p-0"
        aria-label="Platshållare för omdömen"
      >
        {items.map((review) => (
          <li key={review.id} className="review-card w-[min(100%,20rem)] shrink-0 snap-center list-none sm:w-[22rem]">
            <article className="relative h-full rounded-[var(--radius-card)] border border-border/80 bg-surface px-5 pb-5 pt-7 shadow-[var(--shadow-soft)]">
              <p className="font-display text-5xl leading-none text-brand" aria-hidden>
                ”
              </p>
              <p className="absolute right-5 top-6 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {review.placeholder === false && review.rating ? `${review.rating} av 5` : "Betyg saknas"}
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink">{review.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className="flex size-11 items-center justify-center rounded-full bg-canvas-deep font-display text-lg text-ink-muted"
                  aria-hidden
                >
                  –
                </span>
                <div>
                  <p className="font-semibold text-ink">{review.name}</p>
                  <p className="text-meta">{review.role}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button type="button" className="review-nav" onClick={() => move(-1)} aria-label="Föregående omdöme">
          ←
        </button>
        <button type="button" className="review-nav" onClick={() => move(1)} aria-label="Nästa omdöme">
          →
        </button>
      </div>
    </div>
  );
}
