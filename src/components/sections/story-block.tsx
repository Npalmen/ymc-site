import { aboutPage } from "@/content/pages/about";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { RichLine } from "@/components/ui/rich-line";

export function StoryBlock() {
  return (
    <section className="bg-canvas pb-8 pt-2 sm:pb-12">
      <Container>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] lg:items-start lg:gap-12">
          <div>
            <Pill>{aboutPage.eyebrow}</Pill>
            <h1 className="text-hero mt-5 max-w-[12em]">
              <RichLine parts={aboutPage.title} />
            </h1>
            <div className="mt-6 max-w-[40rem] space-y-4 text-body text-ink-muted">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-display text-[clamp(1.45rem,4vw,2rem)] italic leading-snug text-accent">
                {aboutPage.quote}
              </p>
            </blockquote>
            <div className="mt-8 max-w-[40rem] space-y-4 text-body text-ink">
              {aboutPage.voice.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-16">
            <PlaceholderFrame
              label={aboutPage.imageLabel}
              caption="Grundare · Biim Frischenfeldt"
              ratio="3/4"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
