import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { SectionIntro } from "@/components/ui/section-intro";
import { Field, Input, Textarea, Select, Checkbox } from "@/components/ui/form";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { FeatureBlock } from "@/components/sections/feature-block";
import { NumberedStory } from "@/components/sections/numbered-story";
import { HumanStory } from "@/components/sections/human-story";
import { CtaClose } from "@/components/sections/cta-close";
import { BookingServiceChoice } from "@/features/booking/components/booking-service-choice";
import { BookingTimeSlots } from "@/features/booking/components/booking-time-slots";
import { BookingReviewShell } from "@/features/booking/components/booking-review-shell";

export const metadata: Metadata = {
  title: "Design System Preview",
  description: "Internal Yellow Music United design system review route.",
  robots: { index: false, follow: false },
};

const observedYellows = [
  { name: "OBSERVED A", hex: "#F7C006" },
  { name: "OBSERVED B", hex: "#F7CC39" },
  { name: "OBSERVED C", hex: "#F6B33B" },
  { name: "OBSERVED D", hex: "#FFD261" },
  { name: "OBSERVED E", hex: "#ffcd00" },
  { name: "OBSERVED F", hex: "#FFF2D4" },
];

function Swatch({
  label,
  className,
  hex,
  tall,
}: {
  label: string;
  className?: string;
  hex?: string;
  tall?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`rounded-[var(--radius-md)] border border-border-strong ${tall ? "h-24" : "h-16"} ${className ?? ""}`}
        style={hex && !className ? { backgroundColor: hex } : undefined}
      />
      <div>
        <p className="text-label text-ink-muted">{label}</p>
        {hex ? <p className="text-meta mt-1 font-mono text-[0.75rem]">{hex}</p> : null}
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader preview />
      <main>
        {/* Expressive intro — sets the world */}
        <Section tone="canvas" spacing="expressive" bleed>
          <Container variant="wide">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>Area 01 · refinement pass</Eyebrow>
                <Heading level="display-xl" className="mt-6 max-w-4xl">
                  Yellow Music — ett visuellt språk för kreativ vägledning
                </Heading>
                <Text variant="body-lg" className="mt-8 max-w-2xl text-ink-muted">
                  Intern granskning av design system. Gate:{" "}
                  <strong className="font-semibold text-ink">DESIGN_SYSTEM_PREVIEW_READY</strong>.
                  Väntar på{" "}
                  <strong className="font-semibold text-ink">DESIGN_SYSTEM_APPROVED</strong> efter
                  manuell granskning.
                </Text>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-border-strong bg-surface p-6 sm:p-8">
                  <p className="text-label text-ink-subtle">Systemöversikt</p>
                  <ul className="mt-4 space-y-3 text-body-sm text-ink-muted">
                    <li className="flex gap-3 border-b border-border pb-3">
                      <span className="text-label text-brand-line">01</span>
                      Grund & typografi
                    </li>
                    <li className="flex gap-3 border-b border-border pb-3">
                      <span className="text-label text-brand-line">02</span>
                      Kompositioner & studio
                    </li>
                    <li className="flex gap-3">
                      <span className="text-label text-brand-line">03</span>
                      Formulär & bokning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="surface" id="surfaces" spacing="large">
          <Container>
            <SectionIntro
              label="A · Brand foundations"
              title="Varm canvas, kontrollerad gul accent"
              description="Working brand yellow oförändrad (#F7C006). Refinement fokuserar på hur gult används — linjer, mjuka ytor och selektiva accenter."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Swatch label="Working brand" className="bg-brand" hex="#F7C006" tall />
              <Swatch label="Brand soft" className="bg-brand-soft" hex="#FFF2D4" tall />
              <Swatch label="Canvas" className="bg-canvas" hex="#FAF8F4" tall />
              <Swatch label="Ink" className="bg-ink" hex="#2C2820" tall />
            </div>
            <hr className="rule-accent my-12" />
            <p className="text-label text-ink-subtle mb-6">Phase 1 — OBSERVED yellow family</p>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {observedYellows.map((y) => (
                <Swatch key={y.hex} label={y.name} hex={y.hex} />
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="canvas" id="typography" spacing="default">
          <Container variant="wide">
            <SectionIntro
              label="B · Typography"
              title="Redaktionell kontrast mellan Fraunces och Source Sans 3"
            />
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="border-t border-border pt-10 lg:col-span-6 lg:border-r lg:border-t-0 lg:pr-14 lg:pt-0">
                <p className="text-label text-ink-subtle">Source Sans 3</p>
                <p className="text-body-lg mt-8 max-w-md text-ink-muted">
                  Brödtext, navigation, formulär och bokning. Lugn, läsbar, professionell utan
                  corporate kyla.
                </p>
                <p className="text-heading-md mt-10">Din navigator genom musikbranschen</p>
                <p className="text-body mt-4 max-w-lg text-ink-muted">
                  Yellow Music är ett musikbolag i Uppsala som erbjuder vägledning och stöd genom
                  din kreativa resa — med positivitet, trygghet och mod.
                </p>
              </div>
              <div className="lg:col-span-6 lg:pl-4">
                <p className="text-label text-ink-subtle">Fraunces — selektivt</p>
                <p className="text-display-xl mt-6">Låt oss växa tillsammans.</p>
                <p className="text-heading-xl mt-10 max-w-lg">
                  Inkludering · Jämställdhet · Positiv kreativitet
                </p>
                <p className="text-quote mt-12 max-w-md text-ink-muted">
                  Vi verkar som en navigator genom musikbranschen.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="canvas-deep" spacing="quiet">
          <Container>
            <SectionIntro label="C · Actions" title="Knappar och länkar — Sunseed" />
            <div className="flex flex-wrap items-center gap-4">
              <Button>Boka planeringsmöte</Button>
              <Button variant="secondary">Läs mer</Button>
              <Button variant="ghost">Utforska</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="mt-10 border-t border-border pt-8">
              <TextLink href="#">Redaktionell länk</TextLink>
            </div>
          </Container>
        </Section>

        <Section tone="surface" spacing="large">
          <Container>
            <SectionIntro
              label="D · Photography"
              title="Bildramar med avsikt — även som platsmarkörer"
            />
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <ImageFrame ratio="4/5" label="Biim-Solrosfält — platsmarkör" caption="Porträtt · 4:5" />
              </div>
              <div className="lg:col-span-7 lg:pt-16">
                <ImageFrame
                  ratio="editorial-wide"
                  label="Yellow Studio — platsmarkör"
                  caption="Editorial wide · 5:3"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="canvas" id="compositions" spacing="expressive" bleed>
          <EditorialSplit
            eyebrow="Utveckla"
            title="Sångpedagogik med trygghet i centrum"
            body="Personlig vägledning anpassad efter dig — inte en generisk kursmall. Verifierad riktning från befintligt innehåll."
            imageLabel="Vocal coaching — platsmarkör"
            cta={{ label: "Boka planeringsmöte", href: "/boka" }}
          />
        </Section>

        <Section tone="surface" spacing="large">
          <NumberedStory
            title="Tre vägar framåt"
            steps={[
              {
                number: "01",
                title: "Utveckla",
                body: "Sång, scennärvaro och kreativ utveckling.",
              },
              {
                number: "02",
                title: "Skapa",
                body: "Studio, produktion och inspelning i Starlight Studios.",
              },
              {
                number: "03",
                title: "Ge ut",
                body: "Distribution och utgivning med dig i centrum.",
              },
            ]}
          />
        </Section>

        <Section tone="canvas" spacing="default">
          <FeatureBlock
            eyebrow="Ge ut musik"
            title="Distribution med dig i centrum"
            body="Strukturerat stöd för utgivning — redaktionellt block utan dashboard-känsla."
            imageLabel="Distribution — platsmarkör"
            cta={{ label: "Se tjänsten", href: "#" }}
          />
        </Section>

        <Section tone="surface" spacing="expressive">
          <HumanStory
            name="Biim Frischenfeldt"
            role="CEO / VD"
            quote="Vi verkar som en navigator genom musikbranschen."
            body="Yellow Music United grundades 2020 med målet att förena musik med människor — med positivitet och genuinitet. Text hämtad från verifierat offentligt innehåll."
          />
        </Section>

        <Section tone="studio" spacing="expressive" bleed id="studio">
          <Container variant="wide">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <Eyebrow variant="studio">Starlight Studios</Eyebrow>
                <Heading level="display-lg" className="mt-6 text-ink-inverse">
                  Studio som selektiv kontrast — inte hela webbplatsen
                </Heading>
                <Text variant="body-lg" className="mt-6 max-w-md text-ink-inverse/75">
                  LP-skivor, neon och inspelningsmiljö. Varm mörk yta med subtil gul glöd — aldrig
                  cyberpunk eller neon-tech.
                </Text>
              </div>
              <div className="lg:col-span-7">
                <ImageFrame
                  layout="studio-landscape"
                  label="Studio interior — platsmarkör"
                  variant="studio"
                  caption="Studio · 16:10"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="canvas" id="forms" spacing="large">
          <Container variant="reading">
            <SectionIntro label="F · Forms" title="Formulär som hör hemma i Yellow Music" />
            <div className="border border-border-strong bg-surface p-6 sm:p-10" role="form" aria-label="Exempelformulär">
              <Field id="name" label="Namn" helperText="Exempelformulär — ingen insändning">
                <Input id="name" name="name" autoComplete="name" />
              </Field>
              <div className="mt-6">
                <Field id="email" label="E-post">
                  <Input id="email" name="email" type="email" autoComplete="email" />
                </Field>
              </div>
              <div className="mt-6">
                <Field id="service" label="Tjänst">
                  <Select id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Välj tjänst
                    </option>
                    <option value="sang">Sångpedagogik</option>
                    <option value="studio">Studio</option>
                  </Select>
                </Field>
              </div>
              <div className="mt-6">
                <Field id="message" label="Meddelande" error="Exempel på valideringsfel">
                  <Textarea id="message" name="message" hasError />
                </Field>
              </div>
              <div className="mt-6">
                <Checkbox name="consent" label="Jag godkänner att Yellow Music kontaktar mig." defaultChecked />
              </div>
              <div className="mt-8 border-t border-border pt-8">
                <Button type="button">Skicka</Button>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="surface" id="booking" spacing="large">
          <Container>
            <SectionIntro
              label="G · Booking visuals"
              title="Bokning som känns som Yellow Music"
              description="Fixture-tillstånd endast. Ingen bokningslogik."
            />
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <Heading level="heading-sm" className="mb-6">
                  Vad vill du boka?
                </Heading>
                <BookingServiceChoice
                  options={[
                    {
                      id: "plan",
                      title: "Planeringsmöte",
                      description: "Kostnadsfritt introduktionssamtal",
                      duration: "30 min",
                      selected: true,
                    },
                    {
                      id: "sang",
                      title: "Sånglektion",
                      description: "Personlig sångpedagogik",
                      duration: "45 min",
                    },
                    {
                      id: "studio",
                      title: "Studiotid",
                      description: "Starlight Studios",
                      duration: "2 tim",
                    },
                    {
                      id: "podcast",
                      title: "Podcast",
                      description: "Inspelning & produktion",
                      duration: "60 min",
                    },
                  ]}
                />
              </div>
              <div className="border-l border-border pl-0 lg:pl-14">
                <BookingTimeSlots
                  dateLabel="Tors 28 augusti"
                  slots={[
                    { time: "09:00" },
                    { time: "10:00", selected: true },
                    { time: "11:00" },
                    { time: "13:00", disabled: true },
                    { time: "14:00" },
                    { time: "15:00" },
                  ]}
                />
              </div>
            </div>
            <div className="mt-14 max-w-2xl">
              <BookingReviewShell
                service="Planeringsmöte"
                datetime="Tors 28 aug, 10:00"
                name="Exempel Kund"
                email="kund@example.com"
              />
            </div>
          </Container>
        </Section>

        <Section tone="brand-soft" spacing="expressive">
          <CtaClose
            title="Redo att ta nästa steg?"
            body="Kontakta oss för ett förutsättningslöst planeringsmöte — verifierad CTA-riktning från befintlig sajt."
          />
        </Section>

        <Section tone="canvas" spacing="quiet">
          <Container>
            <hr className="rule-accent mb-6" />
            <Text variant="meta">
              Refinement pass · responsiv granskning: 375 · 430 · 768 · 1024 · 1440 · 1920 px.
              Reduced motion respekteras. Fokus synligt på interaktiva element.
            </Text>
          </Container>
        </Section>
      </main>
    </>
  );
}
