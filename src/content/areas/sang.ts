import type { HubContent } from "./types";

export const sangHub: HubContent = {
  id: "sang",
  metaTitle: "Sång",
  metaDescription:
    "Personlig sångpedagogik, scencoachning och röstutveckling i Uppsala — med trygghet och vägledning.",
  eyebrow: "01 — Sång",
  headline: "Utveckla din röst med trygghet i centrum",
  intro:
    "Personlig sångcoaching och scennärvaro anpassat efter dig — nybörjare som erfaren. Vi möter dig där du är.",
  whoFor:
    "Dig som vill utveckla röst, uttryck och närvaro — på scen, i studion eller i vardagen.",
  approach:
    "Vägledning med positivitet, trygghet och mod. Ingen generisk kursmall — din resa styr tempot.",
  difference:
    "Yellow Music kombinerar pedagogik med musikbranschens verklighet. Du får en navigator, inte bara en lektion.",
  servicesHeading: "Inom sång",
  services: [
    {
      title: "Sånglektioner",
      summary: "Sånglektioner i Uppsala — personlig utveckling anpassad efter dig.",
      bookingIntent: "sanglektion",
    },
    {
      title: "Sångpedagogik",
      summary: "Övergripande vocal education och utveckling.",
      bookingIntent: "sangpedagogik",
    },
    {
      title: "Scencoachning",
      summary: "Scennärvaro och uttryck för scenen.",
      bookingIntent: "scencoachning",
    },
    {
      title: "Fonationsteknik",
      summary: "Teknik kring röstband och fonation.",
      bookingIntent: "fonationsteknik",
    },
    {
      title: "Hälsosam sångteknik",
      summary: "Hållbar röstanvändning och teknik.",
      bookingIntent: "sangteknik",
    },
    {
      title: "Sång & komp",
      summary: "Sång tillsammans med ackompanjemang.",
      bookingIntent: "sang-och-komp",
    },
  ],
  imageLabel: "Sångpedagogik — platsmarkör",
  imageCaption: "Vocal coaching · personlig vägledning",
  tone: "warm",
  relatedWorldIds: ["utbildning", "studio"],
  cta: { label: "Boka planeringsmöte", href: "/boka", bookingIntent: "planeringsmote" },
  secondaryCta: { label: "Kontakta oss", href: "/kontakt" },
};
