import { faqPage } from "@/content/pages/contact";

export function FaqList({ items = faqPage.items }: { items?: typeof faqPage.items }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-sans text-xl font-semibold leading-snug text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-lg group-open:bg-ink group-open:text-ink-inverse"
              aria-hidden
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </summary>
          <p className="max-w-[46rem] pb-5 text-body text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
