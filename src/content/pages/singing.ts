import type { RichLine } from "@/content/rich-text";

export const singingPage = {
  metaTitle: "Sånglektioner i Uppsala",
  metaDescription:
    "Sånglektioner hos Yellow Music i Uppsala. Första lektionen är kostnadsfri. Kurser om sex eller tolv tillfällen.",
  eyebrow: "Sånglektioner",
  title: [
    { text: "Lär dig sjunga. Börja " },
    { text: "utan kostnad", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Yellow Music erbjuder sånglektioner i Uppsala, i studion i Fyrislund. Vi arbetar med tonsäkerhet, känsla, rytmik och frihet. Oavsett mål och förkunskaper är du välkommen.",
  imageLabel: "Sånglektion i studion. Foto saknas. Foto på nuvarande sajt: Stefan Lindgren.",
};

export const lessonPackages = [
  {
    id: "prova",
    title: "Prova på",
    summary: "Första lektionen är kostnadsfri. Du binder dig inte till att fortsätta efteråt.",
    price: "Kostnadsfri",
    priceMissing: false,
    note: "Ett tillfälle · en timme",
    points: [
      "Tonsäkerhet, känsla, rytmik och frihet",
      "Ingen bindning efter lektionen",
      "I studion i Fyrislund, Uppsala",
    ],
    cta: "Boka nu",
    href: "/boka?amne=prova-pa",
  },
  {
    id: "sex",
    title: "Sex tillfällen",
    summary: "En kurs om sex lektioner. Varje tillfälle är en timme. Priset är inte publicerat ännu.",
    price: "Pris saknas",
    priceMissing: true,
    note: "Sex tillfällen · en timme vardera",
    points: [
      "Sex lektioner",
      "En timme per tillfälle",
      "Samma fokus: tonsäkerhet, känsla, rytmik och frihet",
    ],
    cta: "Boka nu",
    href: "/boka?amne=sex-tillfallen",
  },
  {
    id: "tolv",
    title: "Tolv tillfällen",
    summary: "En kurs om tolv lektioner. Varje tillfälle är en timme. Priset är inte publicerat ännu.",
    price: "Pris saknas",
    priceMissing: true,
    note: "Tolv tillfällen · en timme vardera",
    points: [
      "Tolv lektioner",
      "En timme per tillfälle",
      "Samma fokus: tonsäkerhet, känsla, rytmik och frihet",
    ],
    cta: "Boka nu",
    href: "/boka?amne=tolv-tillfallen",
  },
] as const;

export const packagesPage = {
  metaTitle: "Mina lektionspaket",
  metaDescription:
    "Sångpaket hos Yellow Music: prova på kostnadsfritt, eller kurs om sex eller tolv tillfällen. Priser för kurserna saknas.",
  eyebrow: "Mina lektionspaket",
  title: [
    { text: "Tre sätt att börja. Byggt för " },
    { text: "olika", accent: true },
    { text: " lägen." },
  ] satisfies RichLine,
  lede: "Första lektionen är kostnadsfri. Vill du gå vidare finns kurser om sex eller tolv tillfällen, en timme vardera. Priserna för kurserna är inte satta på sidan ännu.",
  priceNotice:
    "Platshållare: beloppen för sex och tolv tillfällen saknas. Märkningen ”kostnadsfri” gäller bara prova på-lektionen, som står så på den nuvarande sajten.",
};

export const stepsPage = {
  metaTitle: "Steg för steg",
  metaDescription:
    "Så går en sångresa hos Yellow Music till: kontakt, kostnadsfri första lektion, sedan sex eller tolv tillfällen.",
  eyebrow: "Steg för steg",
  title: [
    { text: "Från första mejlet till " },
    { text: "nästa", accent: true },
    { text: " ton." },
  ] satisfies RichLine,
  lede: "Ingen färdig mall som ser likadan ut för alla. En tydlig väg, så att du vet vad som händer.",
  steps: [
    {
      n: "01",
      title: "Hör av dig",
      body: "Boka ett kostnadsfritt planeringsmöte, eller skriv direkt. Berätta var du är och vad du vill med rösten.",
    },
    {
      n: "02",
      title: "Prova en lektion",
      body: "Första lektionen är kostnadsfri och tar en timme. Du binder dig inte till att fortsätta.",
    },
    {
      n: "03",
      title: "Välj ett upplägg",
      body: "Vill du gå vidare finns kurser om sex eller tolv tillfällen, en timme vardera. Priserna publiceras när de är satta.",
    },
    {
      n: "04",
      title: "Arbeta i studion",
      body: "Vi övar tonsäkerhet, känsla, rytmik och frihet i Fyrislund, med lagom utmaning och positivitet.",
    },
    {
      n: "05",
      title: "Ta nästa steg",
      body: "När du vill kan vägen fortsätta mot scen, låtskrivning, studio eller utgivning. Vi är navigatorn.",
    },
  ],
};

export const singingDifference = {
  eyebrow: "Sångpedagogiken",
  title: [
    { text: "Så arbetar vi " },
    { text: "annorlunda", accent: true },
    { text: "." },
  ] satisfies RichLine,
  lede: "Jämförelsen beskriver Yellow Musics sätt. Den pekar inte ut något annat företag eller någon namngiven skola.",
  ours: { name: "Yellow Music", sub: "Personlig sångpedagogik" },
  other: { name: "Inte vår modell", sub: "Det vi lämnar därhän" },
  rows: [
    {
      label: "Första steget",
      ours: "Första lektionen är kostnadsfri. Du binder dig inte.",
      other: "Bindning innan du har provat hur rummet känns.",
    },
    {
      label: "Vad vi övar",
      ours: "Tonsäkerhet, känsla, rytmik och frihet. Lagom utmaning.",
      other: "En generisk kursmall som ser likadan ut för alla.",
    },
    {
      label: "Hur rummet känns",
      ours: "Positivitet, trygghet och mod. Du är välkommen oavsett förkunskaper.",
      other: "Prestation före trygghet.",
    },
    {
      label: "Tekniken",
      ours: "Hälsosam sångteknik, formad av Biims egenstudier och samtal med vocal coaches i USA och Kanada.",
      other: "Teknik som struntar i hur rösten mår.",
    },
    {
      label: "Vad som händer sen",
      ours: "Lektionerna sitter i samma hus som studio, låtskrivning och utgivning. Din musik förblir din.",
      other: "En isolerad lektion utan nästa steg, eller någon annan som äger verket.",
    },
  ],
};

export const singingAlso = [
  {
    title: "Scencoachning",
    body: "Scennärvaro och uttryck, för dig som vill ta rösten vidare ut på scen.",
  },
  {
    title: "Fonationsteknik",
    body: "Teknik kring rösten och fonation, som en del av den hälsosamma grunden.",
  },
  {
    title: "Hälsosam sångteknik",
    body: "Hållbar röst. Biim gick själv den vägen efter stämbandsproblem och heshet.",
  },
  {
    title: "Sång och komp",
    body: "Sång tillsammans med ackompanjemang, när du vill sjunga till musik och inte bara a cappella.",
  },
];
