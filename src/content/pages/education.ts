import type { RichLine } from "@/content/rich-text";

export type CoursePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: RichLine;
  lede: string;
  imageLabel: string;
  sections: { heading: string; paragraphs: string[] }[];
  points: string[];
  missing: string;
  cta: { label: string; href: string };
  topic: string;
};

export const educationHub = {
  metaTitle: "Utbildning",
  metaDescription:
    "Utbildning hos Yellow Music: musikproduktion för tjejer och låtskrivning, i Uppsala.",
  eyebrow: "Utbildning",
  title: [
    { text: "Lär dig göra musiken " },
    { text: "själv", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Två spår just nu: en kurs i musikproduktion för tjejer, och låtskrivning för den som vill skriva och färdigställa egna låtar. Praktik finns också hos Yellow Music i Uppsala.",
  courses: [
    {
      n: "01",
      title: "Musikproduktion för tjejer",
      note: "Grunderna. En låt som projekt. Från start till ett avslut.",
      href: "/tjanster/utbildning/musikproduktion-for-tjejer",
    },
    {
      n: "02",
      title: "Låtskrivning",
      note: "Workshop och kurs, enskilt eller i grupp. Hela vägen till en färdig låt.",
      href: "/tjanster/utbildning/latskrivning",
    },
  ],
  praktik:
    "Praktik hos Yellow Music i Uppsala finns som väg in i verksamheten. Upplägg, längd och vad praktiken innehåller är inte beskrivet i detalj här ännu.",
};

export const productionCourse: CoursePageContent = {
  metaTitle: "Musikproduktion för tjejer",
  metaDescription:
    "Kurs i musikproduktion för tjejer hos Yellow Music. Grunderna, en låt som projekt, och målet att kunna påbörja och avsluta en inspelning.",
  eyebrow: "Utbildning",
  title: [
    { text: "Musikproduktion för " },
    { text: "tjejer", accent: true },
    { text: "." },
  ],
  lede: "Yellow Music vill se fler tjejer som musikproducenter. I dag är majoriteten män. Därför finns en kurs som ger grunderna: hur man startar, och hur man fortsätter.",
  imageLabel: "Kurs i studion. Foto saknas.",
  sections: [
    {
      heading: "En låt som projekt",
      paragraphs: [
        "Under kurstillfällena arbetar ni med en valfri låt. Målet är att spela in en cover, eller att starta en helt egen låt.",
        "När kursen är slut ska du vara bekväm med att påbörja och avsluta en inspelning, kunna göra en lättare mix och ett avslut. Och ha hittat motivationen att ta nästa steg mot att bli musikproducent och självständig artist.",
      ],
    },
  ],
  points: [
    "Grunderna i musikproduktion",
    "Ett eget projekt: cover eller egen låt",
    "Påbörja och avsluta en inspelning",
    "En lättare mix och ett avslut",
  ],
  missing: "Antal tillfällen, tider och pris är inte publicerade. De fylls i när Biim satt dem.",
  cta: { label: "Ansök nu", href: "/boka?amne=musikproduktion" },
  topic: "musikproduktion",
};

export const songwritingCourse: CoursePageContent = {
  metaTitle: "Låtskrivning",
  metaDescription:
    "Låtskrivning hos Yellow Music: workshop och kurs, individuellt eller i grupp, med möjlighet att ge ut låten.",
  eyebrow: "Utbildning",
  title: [
    { text: "Att låta tankarna bli en " },
    { text: "melodi", accent: true },
    { text: "." },
  ],
  lede: "Yellow Music vägleder låtskrivare och artister mot en självständig karriär. Det finns workshops och en kurs i låtskrivande, både individuellt och i grupp.",
  imageLabel: "Låtskrivning. Foto saknas.",
  sections: [
    {
      heading: "Från första raden till en färdig låt",
      paragraphs: [
        "Hitta verktygen för att starta och sedan färdigställa en låt. Yellow Music kan också hjälpa till att slutföra projektet och ge ut låten på en digital plattform, som Spotify eller Apple Music.",
        "Din musik förblir din. Utgivningen tar inte över rättigheterna.",
      ],
    },
  ],
  points: [
    "Workshop och kurs",
    "Individuellt eller i grupp",
    "Från start till en färdig låt",
    "Möjlighet att gå vidare till utgivning",
  ],
  missing: "Antal tillfällen, tider och pris är inte publicerade. De fylls i när Biim satt dem.",
  cta: { label: "Ansök nu", href: "/boka?amne=latskrivning" },
  topic: "latskrivning",
};
