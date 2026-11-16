import { aboutPage } from "@/content/pages/about";
import type { RichLine as RichParts } from "@/content/rich-text";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

export function PrinciplesCard({
  principles = aboutPage.principles,
  valuesLine = aboutPage.valuesLine,
}: {
  principles?: {
    eyebrow: string;
    title: RichParts;
    items: readonly { n: string; title: string; body: string }[];
  };
  valuesLine?: string;
}) {
  return (
    <section className="bg-canvas px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[var(--container-default)] rounded-[var(--radius-card)] bg-studio px-5 py-8 text-ink-inverse sm:px-8 sm:py-12">
        <Pill tone="dark">{principles.eyebrow}</Pill>
        <h2 className="text-section mt-5 max-w-[14em]">
          <RichLine parts={principles.title} tone="brand" />
        </h2>
        <ol className="mt-10 grid grid-cols-2 auto-rows-fr gap-x-4 gap-y-8 border-t border-white/10 pt-8">
          {[...principles.items].sort((a, b) => Number(a.n) - Number(b.n)).map((item) => (
            <li key={item.n} className="min-w-0">
              <p className="font-sans text-2xl font-semibold text-brand">{item.n}</p>
              <h3 className="mt-2 font-sans text-[1.15rem] break-words font-semibold leading-tight sm:text-3xl"><RichLine parts={item.title} /></h3>
              <p className="mt-2 max-w-md text-body-sm text-ink-inverse/70">{item.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 border-t border-white/10 pt-6 text-center font-sans text-lg text-brand">
          {valuesLine}
        </p>
      </div>
    </section>
  );
}
