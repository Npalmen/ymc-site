import { homePage } from "@/content/pages/home";
import { reviewPlaceholders } from "@/content/pages/shared";
import { site } from "@/content/site";
import { ReviewCarousel } from "@/components/motion/review-carousel";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { RichLine } from "@/components/ui/rich-line";

type ReviewItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating?: number | null;
  placeholder?: boolean;
};

export function ReviewRail({
  reviews,
  items = reviewPlaceholders.map((item) => ({ ...item, rating: null, placeholder: true })),
  trustpilot = site.social.trustpilot,
}: {
  reviews?: typeof homePage.reviews;
  items?: ReviewItem[];
  trustpilot?: string;
}) {
  const copy = reviews ?? homePage.reviews;
  return (
    <section className="overflow-x-clip bg-canvas py-16 sm:py-24" aria-labelledby="omdomen-rubrik">
      <Container>
        <Pill>{copy.eyebrow}</Pill>
        <h2 id="omdomen-rubrik" className="text-section mt-5 max-w-[16em]">
          <RichLine parts={copy.title} />
        </h2>
        <p className="mt-4 max-w-xl text-body text-ink-muted">{copy.note}</p>
        <p className="mt-4">
          <a
            href={trustpilot}
            className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-brand decoration-2 underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs verifierade omdömen på Trustpilot
          </a>
        </p>
        <ReviewCarousel items={items} />
      </Container>
    </section>
  );
}
