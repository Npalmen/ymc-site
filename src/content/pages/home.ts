import type { RichLine } from "@/content/rich-text";

export const homePage = {
  hero: {
    eyebrow: "Musikbolag i Uppsala",
    title: [
      { text: "Låt oss växa " },
      { text: "tillsammans", accent: true },
      { text: "." },
    ] satisfies RichLine,
    lede: "Vi är din navigator genom musikbranschen — med positivitet, trygghet och mod. Sång, utbildning, utgivning och ett community som började 2020.",
    primary: { label: "Boka nu", href: "/boka" },
    secondary: { label: "Sånglektioner", href: "/tjanster/sanglektioner" },
    meta: ["Uppsala", "Starlight Studios · Fyrislund", "Sedan 2020"],
    imageLabel: "Biim i solrosfält. Godkänt foto saknas.",
    imageCaption: "Signaturbild · solrosen är Biims",
  },
  paths: [
    {
      n: "01",
      title: "Sånglektioner",
      note: "Första lektionen är kostnadsfri.",
      href: "/tjanster/sanglektioner",
    },
    {
      n: "02",
      title: "Utbildning",
      note: "Musikproduktion för tjejer och låtskrivning.",
      href: "/tjanster/utbildning",
    },
    {
      n: "03",
      title: "Distribution",
      note: "Din musik förblir din.",
      href: "/tjanster/distribution",
    },
  ],
  communityLink: { label: "Community", href: "/community" },
  soul: {
    eyebrow: "Varför sjunga",
    title: "Bra för själen",
    lede: "Inte som ett löfte om att allt blir lätt. Som ett rum där rösten får vara ärlig, och där modet får ta tid.",
    points: [
      "Du blir mött där du är, nybörjare eller erfaren.",
      "Trygghet först. Modet kommer när rösten får vara den den är.",
      "Hälsosam teknik, så att en bra röst-dag inte känns som tur.",
      "Tonsäkerhet, känsla, rytmik och frihet — i lagom dos.",
      "Du sjunger inte ensam. Vi växer tillsammans.",
    ],
    imageLabel: "Porträtt eller solrosfält. Foto saknas.",
    dark: {
      label: "Första steget",
      title: "En timme. Ingen bindning.",
      body: "Första sånglektionen är kostnadsfri. Vi lyssnar, du provar, och sen bestämmer du själv om du vill gå vidare.",
      cta: { label: "Boka nu", href: "/boka?amne=prova-pa" },
    },
  },
  reviews: {
    eyebrow: "Omdömen",
    title: [
      { text: "Snälla ord från elever och familjer som " },
      { text: "trivs här", accent: true },
      { text: "." },
    ] satisfies RichLine,
    note: "Rutorna är platshållare. Yellow Music publicerar inte påhittade recensioner eller betyg. Verifierade omdömen ligger på Trustpilot tills riktiga texter får en plats här.",
  },
  founder: {
    eyebrow: "Om oss",
    title: [
      { text: "En navigator, inte ett " },
      { text: "ansiktslöst", accent: true },
      { text: " bolag." },
    ] satisfies RichLine,
    body: "Biim Frischenfeldt grundade Yellow Music United 2020 för att förena musik med människor. Värderingarna är positivitet, trygghet och mod — och inkludering, jämställdhet, positiv kreativitet.",
    imageLabel: "Porträtt av Biim Frischenfeldt. Foto saknas.",
    cta: { label: "Läs berättelsen", href: "/om-oss" },
  },
  close: {
    title: [
      { text: "Redo när " },
      { text: "du", accent: true },
      { text: " är." },
    ] satisfies RichLine,
    body: "Boka ett kostnadsfritt planeringsmöte. Ett samtal om nästa steg, utan bindning.",
  },
};
