import type { HubContent } from "./types";

export const studioHub: HubContent = {
  id: "studio",
  metaTitle: "Studio & produktion",
  metaDescription:
    "Starlight Studios i Fyrislund — inspelning, produktion och podcast i en kreativ studio-miljö.",
  eyebrow: "02 — Studio & produktion",
  headline: "Starlight Studios",
  intro:
    "Fullt utrustad inspelningsstudio i Fyrislund. LP-skivor, neon och en miljö formad för kreativitet — kontor och studio delar lokal.",
  whoFor:
    "Artister, poddare och kreatörer som vill spela in, producera eller hyra studio på sina villkor.",
  approach:
    "Professionell utrustning i en atmosfär som känns levande — inte klinisk eller distanserad.",
  difference:
    "Starlight är en del av Yellow Music-världen — du är nära vägledning, produktion och utgivning.",
  servicesHeading: "I studion",
  services: [
    {
      title: "Starlight Studios",
      summary: "Hyra studio och evenemang i Fyrislund.",
      bookingIntent: "studiotid",
    },
    {
      title: "Musikproduktion",
      summary: "Produktion och inspelning med stöd av erfarna producenter.",
      bookingIntent: "musikproduktion",
    },
    {
      title: "Podcast",
      summary: "Inspelning, editering och coachning i Starlight Studios.",
      bookingIntent: "podcast",
    },
  ],
  imageLabel: "Yellow Studio — platsmarkör",
  imageCaption: "Starlight Studios · Fyrislund",
  tone: "studio",
  relatedWorldIds: ["ge-ut-musik", "sang"],
  cta: { label: "Boka studiotid", href: "/boka", bookingIntent: "studiotid" },
  secondaryCta: { label: "Kontakta oss", href: "/kontakt" },
};
