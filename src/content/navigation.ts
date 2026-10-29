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

/** Kept so the design-system dropdown primitive still typechecks. */
export type NavDropdownGroup = {
  id: string;
  label: string;
  intro?: string;
  items: NavItem[];
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type ServiceGroup = {
  label: string;
  href: string;
  description: string;
  children: NavLink[];
};

/** Public IA from Biim, 2026. See ADR-004. */
export const serviceGroups: ServiceGroup[] = [
  {
    label: "Sånglektioner",
    href: "/tjanster/sanglektioner",
    description: "Personlig sång i Uppsala. Första lektionen är kostnadsfri.",
    children: [
      { label: "Steg för steg", href: "/tjanster/sanglektioner/steg-for-steg" },
      { label: "Mina lektionspaket", href: "/tjanster/sanglektioner/lektionspaket" },
    ],
  },
  {
    label: "Utbildning",
    href: "/tjanster/utbildning",
    description: "Musikproduktion för tjejer och låtskrivning.",
    children: [
      {
        label: "Musikproduktion för tjejer",
        href: "/tjanster/utbildning/musikproduktion-for-tjejer",
      },
      { label: "Låtskrivning", href: "/tjanster/utbildning/latskrivning" },
    ],
  },
  {
    label: "Distribution",
    href: "/tjanster/distribution",
    description: "Utgivning där du behåller din musik.",
    children: [],
  },
];

export const topLinks: NavLink[] = [
  { label: "Community", href: "/community" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
];

export const bookingNavigation: NavLink = { label: "Boka nu", href: "/boka" };

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Tjänster",
    links: [
      { label: "Sånglektioner", href: "/tjanster/sanglektioner" },
      { label: "Steg för steg", href: "/tjanster/sanglektioner/steg-for-steg" },
      { label: "Mina lektionspaket", href: "/tjanster/sanglektioner/lektionspaket" },
      { label: "Utbildning", href: "/tjanster/utbildning" },
      {
        label: "Musikproduktion för tjejer",
        href: "/tjanster/utbildning/musikproduktion-for-tjejer",
      },
      { label: "Låtskrivning", href: "/tjanster/utbildning/latskrivning" },
      { label: "Distribution", href: "/tjanster/distribution" },
    ],
  },
  {
    title: "Yellow Music",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Community", href: "/community" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "FAQ", href: "/faq" },
      { label: "Boka nu", href: "/boka" },
      { label: "Alla tjänster", href: "/tjanster" },
    ],
  },
];
