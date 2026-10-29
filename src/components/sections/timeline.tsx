import { aboutPage } from "@/content/pages/about";
import { TimelineRail } from "@/components/motion/timeline-rail";
import { Container } from "@/components/ui/container";

export function Timeline({
  items = aboutPage.timeline,
  title = "Vägen hit",
}: {
  items?: typeof aboutPage.timeline;
  title?: string;
}) {
  return (
    <section className="bg-canvas py-14 sm:py-20" aria-labelledby="resa-rubrik">
      <Container variant="reading">
        <h2 id="resa-rubrik" className="text-section">
          {title}
        </h2>
        <TimelineRail items={items} />
      </Container>
    </section>
  );
}
