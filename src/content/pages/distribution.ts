import type { RichLine } from "@/content/rich-text";

export const distributionPage = {
  metaTitle: "Distribution",
  metaDescription:
    "Musikutgivning och distribution med Yellow Music. Du behåller rättigheterna. Hjälp med singel, EP, album, podcast och studio.",
  eyebrow: "Distribution",
  title: [
    { text: "Utgivning där du kommer " },
    { text: "först", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Yellow Music ger ut musik, podcast och annan inspelning. Till skillnad från ett renodlat skivbolag sätter vi dig och din kreativitet först. Vi är navigatorn tills ni är i mål. Hundra procent av royalties och intäkter går till rätt roll.",
  imageLabel: "Utgivning och studio. Foto saknas.",
  blocks: [
    {
      id: "musik",
      title: "Musikutgivning",
      paragraphs: [
        "Vägledning och stöd när du släpper musik på digitala plattformar. Vi hjälper till med det praktiska kring singel, EP eller fullängdsalbum.",
        "Vi hjälper också dig som vill ta en tidigare släppt CD eller LP till digital distribution. Yellow Music har inga rättigheter. Din musik är din musik. Fokus är att du som artist ska vara, och förbli, självständig.",
      ],
    },
    {
      id: "podcast",
      title: "Podcast",
      paragraphs: [
        "I Starlight Studios spelar vi in, editerar och färdigställer avsnitt, och coachar dig i skapandet av en podcast.",
      ],
    },
    {
      id: "starlight",
      title: "Hyr Starlight Studios",
      paragraphs: [
        "Studion är fullt utrustad för musik och inspelning. Producenter och artister kan hyra den dagtid, enligt överenskommelse. Har du spelat in podcast förut är du också välkommen att hyra studion.",
        "Lokalen kan även användas för till exempel möhippa eller födelsedag. Hör av dig så berättar vi vad som är ledigt.",
      ],
    },
  ],
};
