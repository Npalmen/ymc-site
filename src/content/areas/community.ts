import type { HubContent } from "./types";

export const communityHub: HubContent = {
  id: "community",
  metaTitle: "Community",
  metaDescription:
    "Yellow Music community — kreativ miljö, samarbete och gemenskap i Uppsala.",
  eyebrow: "05 — Community",
  headline: "En kreativ gemenskap",
  intro:
    "Yellow Music community samlar människor kring musik, kreativitet och utveckling — inte som buzzword, utan som verklig miljö.",
  whoFor:
    "Dig som vill vara en del av ett nätverk — samarbeta, inspireras och växa tillsammans.",
  approach:
    "Community som förlängning av vägledning: positivitet, inkludering och gemensam resa.",
  difference:
    "Inte en sluten klubb — en öppen kreativ miljö kopplad till Yellow Musics världar.",
  servicesHeading: "Inom community",
  services: [
    {
      title: "Community-medlemskap",
      summary: "Nätverk och gemenskap kring musik och kreativitet.",
    },
    {
      title: "Blogg & tips",
      summary: "Tips, tricks och berättelser från Yellow Music-världen (blogg — framtida CMS).",
    },
  ],
  imageLabel: "Community — platsmarkör",
  imageCaption: "Människor · samarbete",
  tone: "community",
  relatedWorldIds: ["utbildning", "sang"],
  cta: { label: "Kontakta oss", href: "/kontakt" },
  secondaryCta: { label: "Utforska Yellow Music", href: "/yellow-music" },
};
