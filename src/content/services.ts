export type Service = {
  id: string;
  title: string;
  summary: string;
  href?: string;
};

/** Service summaries from content inventory — full copy deferred to CMS/page work */
export const services: Service[] = [
  {
    id: "sangpedagogik",
    title: "Sångpedagogik",
    summary:
      "Personlig sångcoaching och scennärvaro anpassat efter dig och dina behov.",
    href: "/tjanster/sangpedagogik",
  },
  {
    id: "musikproduktion",
    title: "Introkurs i musikproduktion",
    summary: "Kom igång med musikproduktion i en stödjande miljö.",
    href: "/tjanster/musikproduktion",
  },
  {
    id: "distribution",
    title: "Musikutgivning & distribution",
    summary:
      "Vägledning vid utgivning av singlar, EP och album — du behåller dina rättigheter.",
    href: "/musikutgivning",
  },
  {
    id: "podcast",
    title: "Podcast",
    summary:
      "Inspelning, editering och coachning i Starlight Studios.",
    href: "/distribution/podcast",
  },
  {
    id: "studio",
    title: "Starlight Studios",
    summary:
      "Fullt utrustad inspelningsstudio i Fyrislund — hyra och evenemang.",
    href: "/starlight-studios",
  },
];
