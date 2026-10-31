import { singingDifference } from "@/content/pages/singing";
import type { RichLine as RichParts } from "@/content/rich-text";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

export function DifferenceTable({
  data = singingDifference,
}: {
  data?: {
    eyebrow: string;
    title: RichParts;
    lede: string;
    ours: { name: string; sub: string };
    other: { name: string; sub: string };
    rows: readonly { label: string; ours: string; other: string }[];
  };
}) {
  const copy = data;
  return (
    <section className="bg-canvas py-16 sm:py-20" aria-labelledby="skillnad-rubrik">
      <Container>
        <Pill>{copy.eyebrow}</Pill>
        <h2 id="skillnad-rubrik" className="text-section mt-5 max-w-[14em]">
          <RichLine parts={copy.title} />
        </h2>
        <p className="mt-4 max-w-xl text-body text-ink-muted">{copy.lede}</p>
        <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
          <div className="grid grid-cols-2 bg-studio text-ink-inverse">
            <div className="px-3 py-4 sm:px-5">
              <p className="font-sans text-lg font-semibold text-brand sm:text-2xl">{copy.ours.name}</p>
              <p className="mt-1 text-[0.75rem] text-ink-inverse/70 sm:text-body-sm">{copy.ours.sub}</p>
            </div>
            <div className="border-l border-white/10 px-3 py-4 sm:px-5">
              <p className="font-sans text-lg font-semibold text-ink-inverse/80 sm:text-2xl">{copy.other.name}</p>
              <p className="mt-1 text-[0.75rem] text-ink-inverse/75 sm:text-body-sm">{copy.other.sub}</p>
            </div>
          </div>
          {copy.rows.map((row) => (
            <div key={row.label} className="border-t border-border">
              <h3 className="px-3 pt-4 text-body-sm font-semibold text-ink sm:px-5">{row.label}</h3>
              <div className="grid grid-cols-2">
                <p className="px-3 py-3 text-[0.8125rem] leading-snug text-ink sm:px-5 sm:text-body-sm">
                  <span className="mr-1 text-success" aria-hidden>
                    ✓
                  </span>
                  <span className="sr-only">Yellow Music: </span>
                  {row.ours}
                </p>
                <p className="border-l border-border px-3 py-3 text-[0.8125rem] leading-snug text-ink-muted sm:px-5 sm:text-body-sm">
                  <span className="mr-1 text-error" aria-hidden>
                    ✕
                  </span>
                  <span className="sr-only">Inte vår modell: </span>
                  {row.other}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
