import { homePage } from "@/content/pages/home";
import { reviewPlaceholders } from "@/content/pages/shared";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

export function ReviewRail() {
  return (
    <section className="overflow-x-clip bg-canvas py-16 sm:py-24" aria-labelledby="omdomen-rubrik">
      <Container>
        <Pill>{homePage.reviews.eyebrow}</Pill>
        <h2 id="omdomen-rubrik" className="text-section mt-5 max-w-[16em]">
          <RichLine parts={homePage.reviews.title} />
        </h2>
        <p className="mt-4 max-w-xl text-body text-ink-muted">{homePage.reviews.note}</p>
        <p className="mt-4">
          <a
            href={site.social.trustpilot}
            className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-brand decoration-2 underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs verifierade omdömen på Trustpilot
          </a>
        </p>
        <ul className="mt-10 grid list-none gap-8 p-0 lg:grid-cols-3 lg:gap-6">
          {reviewPlaceholders.map((review) => (
            <li key={review.id} className="review-card list-none">
              <article className="relative rounded-[var(--radius-card)] border border-border/80 bg-surface px-5 pb-5 pt-7 shadow-[var(--shadow-soft)]">
                <p className="font-display text-5xl leading-none text-brand" aria-hidden>
                  ”
                </p>
                <p className="absolute right-5 top-6 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  Betyg saknas
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
      </Container>
    </section>
  );
}
