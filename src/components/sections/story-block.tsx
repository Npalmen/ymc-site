import { aboutPage } from "@/content/pages/about";
import type { RichLine as RichParts } from "@/content/rich-text";
import Image from "next/image";
import { cmsImageUrl, type CmsImage } from "@/sanity/image";

type AboutStory = {
  eyebrow: string;
  title: RichParts;
  paragraphs: readonly string[];
  quote: string;
  voice: readonly string[];
  imageLabel: string;
};
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { RichLine } from "@/components/ui/rich-line";

export function StoryBlock({
  about = aboutPage,
  portrait = null,
  cutout = null,
}: {
  about?: AboutStory;
  portrait?: CmsImage | null;
  cutout?: CmsImage | null;
}) {
  const cutoutSrc = cutout ? cmsImageUrl(cutout, 1200, "max") : null;
  return (
    <section className={`about-story bg-canvas pb-8 pt-2 sm:pb-12${cutoutSrc ? " about-story-cutout" : ""}`}>
      {cutoutSrc ? <div className="about-swirl" aria-hidden>
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice"><path d="M-100 580C200-120 800-180 1000 280S600 900 500 480 1400-200 1600 420M-80 700C260 0 700-70 850 270S680 740 610 480 1320 10 1550 560" fill="none" stroke="currentColor" strokeWidth="90" /></svg>
      </div> : null}
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] lg:items-start lg:gap-12">
          <div>
            <Pill>{about.eyebrow}</Pill>
            <h1 className="text-hero mt-5 max-w-[12em]">
              <RichLine parts={about.title} />
            </h1>
            <div className="mt-6 max-w-[40rem] space-y-4 text-body text-ink-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-display text-[clamp(1.45rem,4vw,2rem)] italic leading-snug text-accent">
                {about.quote}
              </p>
            </blockquote>
            <div className="mt-8 max-w-[40rem] space-y-4 text-body text-ink">
              {about.voice.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className={cutoutSrc ? "about-cutout" : "mt-10 lg:mt-16"}>
            {cutoutSrc ? <Image src={cutoutSrc} alt={cutout?.alt || "Biim Frischenfeldt"} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain object-bottom" /> : (
            <PlaceholderFrame
              image={portrait}
              label={about.imageLabel}
              caption="Grundare · Biim Frischenfeldt"
              ratio="3/4"
            />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
