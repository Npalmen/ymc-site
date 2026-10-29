import type { RichLine } from "@/content/rich-text";

export const aboutPage = {
  metaTitle: "Om oss",
  metaDescription:
    "Om Biim Frischenfeldt och Yellow Music United, grundat 2020 i Uppsala. Värderingar, berättelse och Starlight Studios.",
  eyebrow: "Berättelsen",
  title: [
    { text: "Hur en sångare blev " },
    { text: "navigator", accent: true },
    { text: "." },
  ] satisfies RichLine,
  paragraphs: [
    "Biim Frischenfeldt startade Yellow Music United 2020. Målet har alltid varit att verka som en navigator för kreativa själar i musikbranschen.",
    "Hon är själv musikentreprenör, artist, låtskrivare och producent, med mångårig erfarenhet av industrin och professionella framträdanden i Sverige och utomlands. Drömmen var ett bolag för andra, där vi inspirerar varandra och där fler vågar ta första steget.",
    "Hon vill utmana branschens maktnormer och den ojämställdhet som fortfarande råder. Det är en del av varför Yellow Music finns: ett community som förenar musik med människor, och som välkomnar dig oavsett erfarenhet.",
  ],
  quote:
    "Målet har alltid varit att verka som en navigator för kreativa själar i musikbranschen.",
  voice: [
    "Vägen in i pedagogiken gick genom den egna rösten. Stämbandsproblem och heshet kom och gick. Vanliga sånglektioner tog inte bort osäkerheten: skulle rösten hålla just den dagen?",
    "Biim började studera hälsosam sångteknik på egen hand och bokade samtal med vocal coaches i USA och Kanada, där några av de starkaste vokalisterna kommer ifrån. Intresset för stämbanden växte ihop med intresset för hur man mår. Under pandemin vågade hon ta emot de första eleverna, sångfåglarna, som ville utveckla teknik och scennärvaro.",
  ],
  imageLabel: "Porträtt av Biim Frischenfeldt. Foto saknas.",
  timeline: [
    {
      year: "Bakgrund",
      tag: "Artist",
      title: "Rösten och branschen",
      body: "Biim är artist, låtskrivare, producent och entreprenör. Hon har framträtt professionellt som vokalist, i studio och på scen, i Sverige och utomlands.",
    },
    {
      year: "Vändpunkten",
      tag: "Teknik",
      title: "När rösten inte höll",
      body: "Stämbandsproblem och heshet gjorde att lektionerna hon själv gått inte räckte. Hon började lära sig hälsosam sångteknik, och pratade med vocal coaches i USA och Kanada.",
    },
    {
      year: "2020",
      tag: "Bolaget",
      title: "Yellow Music United",
      body: "Bolaget grundas. Målet är att vara en navigator, och att förena musik med människor. Alltid med positivitet och genuint bemötande.",
    },
    {
      year: "Pandemin",
      tag: "Pedagogik",
      title: "De första sångfåglarna",
      body: "Biim börjar ta emot elever som vill utveckla sångteknik och scennärvaro. Kursen bygger på hennes erfarenhet och egenstudier.",
    },
    {
      year: "I dag",
      tag: "Fyrislund",
      title: "Studio, utbildning, utgivning",
      body: "Kontor och Starlight Studios delar lokal i Fyrislund. Sång, kurser, community och distribution växer ur samma filosofi.",
    },
  ],
  principles: {
    eyebrow: "Våra värderingar",
    title: [
      { text: "Tre principer som bär " },
      { text: "varje", accent: true },
      { text: " möte." },
    ] satisfies RichLine,
    items: [
      {
        n: "01",
        title: "Positivitet",
        body: "Lagom utmaning och ett genuint bemötande. Vi pekar framåt utan att förminska var du står.",
      },
      {
        n: "02",
        title: "Trygghet",
        body: "Ett rum där du får vara nybörjare eller erfaren. Rösten får ta tid. Ingen ska behöva gissa om den håller.",
      },
      {
        n: "03",
        title: "Mod",
        body: "Vi finns här för att du ska våga ta första steget, och nästa. Mot scen, låt, studio eller utgivning.",
      },
    ],
  },
  valuesLine: "Inkludering. Jämställdhet. Positiv kreativitet.",
  studio: {
    eyebrow: "Starlight Studios",
    title: "Ett rum som ser ut som ett rymdskepp, och låter som en studio.",
    paragraphs: [
      "Kontor och musikstudio delar lokal i Fyrislund. Studion är ljudisolerad och har det som behövs för att påbörja och slutföra ett projekt.",
      "Den är inredd med LP-skivor, blinkande knappar och neon, med inspiration från NASA:s rymdskepp. Du kan hyra den som producent och låtskrivare. Den kan också rymma en möhippa, ett födelsedagskalas eller en fest.",
    ],
    imageLabel: "Starlight Studios, interiör. Foto saknas.",
  },
  partners: [
    {
      name: "Tremoloop Music",
      body: "Drivs av multiinstrumentalisten och producenten Andreas Forsberg. Gitarr, band och mångårig ljud- och musikproduktion, med viljan att hjälpa andra nå sina mål.",
    },
    {
      name: "MTMax Music",
      body: "Drivs av producenten Martin Axelsson. Ett prisvärt alternativ med hög kvalitet, för artister och låtskrivare som vill utvecklas i sin musik.",
    },
  ],
};
