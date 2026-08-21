import type { WorldId } from "@/content/worlds";

export const yellowMusicPage = {
  metaTitle: "Yellow Music",
  metaDescription:
    "Om Yellow Music United — Biim Frischenfeldt, värderingar och navigator-filosofi sedan 2020.",
  founder: {
    name: "Biim Frischenfeldt",
    role: "Grundare & VD · Yellow Music United sedan 2020",
    quote: "Vi verkar som en navigator genom musikbranschen.",
    body: "Yellow Music United grundades 2020 med målet att förena musik med människor. Starlight Studios, sångpedagogik och utgivning växer ur samma filosofi — att möta människor där de är.",
    imageLabel: "Porträtt — Biim Frischenfeldt",
  },
  values: [
    { title: "Inkludering", summary: "Alla ska känna sig välkomna i musikens värld." },
    { title: "Jämställdhet", summary: "Lika möjligheter och respekt i kreativa processer." },
    { title: "Positiv kreativitet", summary: "Utveckling genom uppmuntran och ärlig vägledning." },
  ],
  relatedWorldIds: ["sang", "community"] as WorldId[],
  cta: { label: "Boka planeringsmöte", href: "/boka" },
  secondaryCta: { label: "Kontakta oss", href: "/kontakt" },
};
