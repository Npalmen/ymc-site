import type { RichLine } from "@/content/rich-text";

export const communityPage = {
  metaTitle: "Community",
  metaDescription:
    "Yellow Music community i Uppsala. Ett sammanhang som förenar musik med människor.",
  eyebrow: "Community",
  title: [
    { text: "Musik med " },
    { text: "människor", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Yellow Music är ett community lika mycket som ett bolag. Målet är att förena musik med människor, inspirera varandra och våga ta första steget mot en professionell karriär.",
  imageLabel: "Community. Foto saknas.",
  paragraphs: [
    "Det här är ingen stängd klubb med påhittade medlemsnivåer. Det är miljön runt sång, utbildning, studio och utgivning: människor som vill växa, och ett rum där nästa steg får vara litet.",
    "Blogg, träffar och hur man är med beskrivs inte i detalj på den här sidan ännu. Hör av dig om du vill vara med, samarbeta eller bara förstå vad som pågår.",
  ],
  points: [
    { title: "Första steget", body: "Vi finns för den som vill våga börja, inte bara för den som redan är etablerad." },
    { title: "Tillsammans", body: "Sång, låt, studio och utgivning sitter i samma hus. Community är limmet mellan dem." },
    { title: "Öppet", body: "Inkludering och jämställdhet är en del av varför bolaget finns, inte en slogan vid sidan av." },
  ],
};
