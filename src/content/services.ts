export type Service = {
  id: string;
  title: string;
  summary: string;
  href?: string;
};

/** Service summaries — hub routes for IA preview; detail pages deferred */
export const services: Service[] = [
  {
    id: "sangpedagogik",
    title: "Sångpedagogik",
    summary:
      "Personlig sångcoaching och scennärvaro anpassat efter dig och dina behov.",
    href: "/sang",
  },
  {
    id: "musikproduktion",
    title: "Introkurs i musikproduktion",
    summary: "Kom igång med musikproduktion i en stödjande miljö.",
    href: "/utbildning",
  },
  {
    id: "distribution",
    title: "Musikutgivning & distribution",
    summary:
      "Vägledning vid utgivning av singlar, EP och album — du behåller dina rättigheter.",
    href: "/ge-ut-musik",
  },
  {
    id: "podcast",
    title: "Podcast",
    summary: "Inspelning, editering och coachning i Starlight Studios.",
    href: "/studio",
  },
  {
    id: "studio",
    title: "Starlight Studios",
    summary: "Fullt utrustad inspelningsstudio i Fyrislund — hyra och evenemang.",
    href: "/studio",
  },
];
