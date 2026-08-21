import type { HubContent } from "./types";

export const geUtMusikHub: HubContent = {
  id: "ge-ut-musik",
  metaTitle: "Ge ut musik",
  metaDescription:
    "Musikutgivning och distribution med Yellow Music — du behåller dina rättigheter.",
  eyebrow: "04 — Ge ut musik",
  headline: "Musikutgivning & distribution",
  intro:
    "Vägledning vid utgivning av singlar, EP och album. Vi tar inte dina royalties — du behåller kontrollen.",
  whoFor:
    "Artister och kreatörer redo att ge ut musik med stöd genom hela processen.",
  approach:
    "Tydlig progression från idé till release — med transparens kring rättigheter och nästa steg.",
  difference:
    "Artist-first: oberoende utgivning utan att Yellow Music tar över ditt verk.",
  servicesHeading: "Utgivning",
  services: [
    {
      title: "Musikutgivning",
      summary: "Vägledning vid utgivning — singlar, EP och album.",
      bookingIntent: "musikutgivning",
    },
    {
      title: "Distribution",
      summary: "Distribution och release-stöd via Yellow Music-nätverk.",
      bookingIntent: "distribution",
    },
  ],
  imageLabel: "Distribution — platsmarkör",
  imageCaption: "Utgivning · riktning framåt",
  tone: "directional",
  relatedWorldIds: ["studio", "sang"],
  cta: { label: "Boka planeringsmöte", href: "/boka", bookingIntent: "planeringsmote" },
  secondaryCta: { label: "Kontakta oss", href: "/kontakt" },
};
