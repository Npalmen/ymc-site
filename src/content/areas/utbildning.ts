import type { HubContent } from "./types";

export const utbildningHub: HubContent = {
  id: "utbildning",
  metaTitle: "Utbildning",
  metaDescription:
    "Kurser, låtskrivande och kreativ utbildning hos Yellow Music United i Uppsala.",
  eyebrow: "03 — Utbildning",
  headline: "Strukturerad kreativ utveckling",
  intro:
    "Kurser och program för dig som vill lära dig skriva, producera och utvecklas i en stödjande miljö.",
  whoFor:
    "Dig som söker tydlig progression — från första låten till praktik i branschen.",
  approach:
    "Praktisk inspiration kombinerat med trygg vägledning. Inte LMS-dashboard — levande lärande.",
  difference:
    "Utbildning hos Yellow Music kopplas till verklig studio, community och branschvägar.",
  servicesHeading: "Utbildningsområden",
  services: [
    {
      title: "Låtskrivande",
      summary: "Kurser och workshops i låtskrivande.",
      bookingIntent: "latskrivande",
    },
    {
      title: "Musikproduktionskurs",
      summary: "Introkurs i musikproduktion — verifierat erbjudande på sajten.",
      bookingIntent: "musikproduktionskurs",
    },
    {
      title: "Praktik",
      summary: "Praktik hos Yellow Music United i Uppsala.",
      bookingIntent: "praktik",
    },
  ],
  imageLabel: "Utbildning — platsmarkör",
  imageCaption: "Lärande · kreativ progression",
  tone: "structured",
  relatedWorldIds: ["community", "studio"],
  cta: { label: "Boka planeringsmöte", href: "/boka", bookingIntent: "planeringsmote" },
  secondaryCta: { label: "Kontakta oss", href: "/kontakt" },
};
