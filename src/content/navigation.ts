import { creativeWorlds } from "@/content/worlds";
import { site } from "@/content/site";

export type NavItem = {
  label: string;
  href: string;
  number?: string;
  description?: string;
};

export type NavSection = {
  id: string;
  label: string;
  items: NavItem[];
};

export type NavDropdownGroup = {
  id: string;
  label: string;
  intro?: string;
  items: NavItem[];
};

/** Left nav: Utforska — all five creative worlds */
export const desktopUtforskaGroup: NavDropdownGroup = {
  id: "utforska",
  label: "Utforska",
  intro: "Fem kreativa områden — välj din väg.",
  items: creativeWorlds.map((w) => ({
    label: w.label,
    href: w.href,
    number: w.number,
    description: w.tagline,
  })),
};

/** Left nav: Tjänster — verified service intents to existing hubs */
export const desktopTjansterGroup: NavDropdownGroup = {
  id: "tjanster",
  label: "Tjänster",
  intro: "Verifierade erbjudanden — länkat till befintliga sidor.",
  items: [
    {
      label: "Sånglektioner",
      href: "/sang",
      description: "Personlig sångutveckling i Uppsala.",
    },
    {
      label: "Studio",
      href: "/studio",
      description: "Starlight Studios — inspelning och produktion.",
    },
    {
      label: "Musikproduktion",
      href: "/studio",
      description: "Produktion och inspelning med stöd.",
    },
    {
      label: "Distribution",
      href: "/ge-ut-musik",
      description: "Utgivning och distribution — du behåller dina rättigheter.",
    },
  ],
};

/** Right nav: Yellow Music */
export const desktopYellowMusicGroup: NavDropdownGroup = {
  id: "yellow-music",
  label: "Yellow Music",
  intro: "Grundare, story och värderingar.",
  items: [
    { label: "Om Yellow Music", href: "/yellow-music", description: "Vår filosofi och historia." },
    { label: "Biim / grundare", href: "/yellow-music#grundare", description: "Människan bakom bolaget." },
    { label: "Kontakt", href: "/kontakt", description: "Frågor innan du bokar." },
  ],
};

export const desktopLeftNavGroups: NavDropdownGroup[] = [
  desktopUtforskaGroup,
  desktopTjansterGroup,
];

export const desktopRightNavGroups: NavDropdownGroup[] = [desktopYellowMusicGroup];

export const bookingNavigation: NavItem = { label: "Boka", href: "/boka" };

export const mobileMenuCta = {
  label: "Boka planeringsmöte",
  href: "/boka",
};

/** Mobile menu — grouped sections */
export const mobileMenuSections: NavSection[] = [
  {
    id: "utforska",
    label: "Utforska",
    items: desktopUtforskaGroup.items,
  },
  {
    id: "tjanster",
    label: "Tjänster",
    items: desktopTjansterGroup.items,
  },
  {
    id: "yellow-music",
    label: "Yellow Music",
    items: [
      { label: "Om Yellow Music", href: "/yellow-music" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

/** Footer — multi-page structure */
export const primaryWorldNavigation: NavItem[] = creativeWorlds.map((w) => ({
  label: w.navLabel,
  href: w.href,
  number: w.number,
}));

export const footerExploreNavigation: NavItem[] = primaryWorldNavigation;

export const footerBrandNavigation: NavItem[] = [
  { label: "Yellow Music", href: "/yellow-music" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Boka", href: "/boka" },
];

export const footerMoreNavigation: NavItem[] = [
  { label: "Trustpilot", href: site.social.trustpilot },
];
