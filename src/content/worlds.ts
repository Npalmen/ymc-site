/** Five primary Yellow Music creative worlds — Area 02 IA. */
export const creativeWorlds = [
  {
    id: "sang",
    number: "01",
    label: "Sång",
    navLabel: "Sång",
    href: "/sang",
    tagline: "Utveckla röst, uttryck och scennärvaro.",
  },
  {
    id: "studio",
    number: "02",
    label: "Studio & produktion",
    navLabel: "Studio & produktion",
    href: "/studio",
    tagline: "Skapa, spela in och producera i Starlight Studios.",
  },
  {
    id: "utbildning",
    number: "03",
    label: "Utbildning",
    navLabel: "Utbildning",
    href: "/utbildning",
    tagline: "Strukturerad kreativ utveckling och lärande.",
  },
  {
    id: "ge-ut-musik",
    number: "04",
    label: "Ge ut musik",
    navLabel: "Ge ut musik",
    href: "/ge-ut-musik",
    tagline: "Distribution och utgivning — du behåller dina rättigheter.",
  },
  {
    id: "community",
    number: "05",
    label: "Community",
    navLabel: "Community",
    href: "/community",
    tagline: "Kreativ miljö, samarbete och gemenskap.",
  },
] as const;

export type WorldId = (typeof creativeWorlds)[number]["id"];

export function getWorld(id: WorldId) {
  return creativeWorlds.find((w) => w.id === id)!;
}

export function getRelatedWorlds(current: WorldId, ids: WorldId[]) {
  return ids.filter((id) => id !== current).map((id) => getWorld(id));
}
