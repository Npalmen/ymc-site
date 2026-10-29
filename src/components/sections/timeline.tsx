import { aboutPage } from "@/content/pages/about";
import { Container } from "@/components/ui/container";

export function Timeline() {
  return (
    <section className="bg-canvas py-14 sm:py-20" aria-labelledby="resa-rubrik">
      <Container variant="reading">
        <h2 id="resa-rubrik" className="text-section">
          Vägen hit
        </h2>
        <ol className="relative mt-10">
          <span className="absolute bottom-3 left-[7px] top-2 w-px bg-border" aria-hidden />
          {aboutPage.timeline.map((item) => (
            <li key={item.title} className="rise relative pb-10 pl-10 last:pb-0">
              <span
                className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-accent bg-canvas shadow-[0_0_0_5px_var(--color-canvas)]"
                aria-hidden
              />
              <p className="font-display text-2xl italic text-accent">{item.year}</p>
              <p className="mt-2 inline-flex min-h-7 items-center rounded-[var(--radius-pill)] border border-border bg-surface px-2.5 text-[0.75rem] font-medium">
                {item.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-body text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
