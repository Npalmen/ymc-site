import type { RichLine } from "@/content/rich-text";

export const singingPage = {
  metaTitle: "Sånglektioner i Uppsala",
  metaDescription:
    "Sånglektioner och sångpedagogik i Uppsala hos Yellow Music. Första lektionen är kostnadsfri. Sångkurs om sex eller tolv tillfällen.",
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
    paymentInfo: "",
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
    summary: "En kurs om sex lektioner. Varje tillfälle är en timme.",
    price: "4 100 kr",
    paymentInfo: "Betalas månadsvis: 2 050 kr/mån i 2 månader.",
    priceMissing: false,
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
    summary: "En kurs om tolv lektioner. Varje tillfälle är en timme.",
    price: "7 050 kr",
    paymentInfo: "Betalas månadsvis: 2 350 kr/mån i 3 månader.",
    priceMissing: false,
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
  metaTitle: "Sångkurs och lektionspaket i Uppsala",
  metaDescription:
    "Sångkurs hos Yellow Music i Uppsala: prova på kostnadsfritt, eller kurs om sex eller tolv tillfällen.",
  eyebrow: "Mina lektionspaket",
  title: [
    { text: "Tre sätt att börja. Byggt för " },
    { text: "olika", accent: true },
    { text: " lägen." },
  ] satisfies RichLine,
  lede: "Första lektionen är kostnadsfri. Vill du gå vidare finns kurser om sex eller tolv tillfällen, en timme vardera.",
  priceNotice: "",
};

export const stepsPage = {
  metaTitle: "Sångkurs steg för steg i Uppsala",
  metaDescription:
    "Så går en sångkurs hos Yellow Music i Uppsala till: kontakt, kostnadsfri första lektion, sedan sex eller tolv tillfällen.",
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
      body: "Vill du gå vidare finns kurser om sex eller tolv tillfällen, en timme vardera.",
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
