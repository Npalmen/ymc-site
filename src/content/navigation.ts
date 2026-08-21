export type NavItem = {
  label: string;
  href: string;
  /** Future routes — not all implemented in foundation */
  implemented?: boolean;
};

/** Draft navigation — authoritative IA in docs/plans/areas/02-information-architecture.md */
export const primaryNavigation: NavItem[] = [
  { label: "Hem", href: "/", implemented: true },
  { label: "Om oss", href: "/om-oss", implemented: false },
  { label: "Tjänster", href: "/tjanster", implemented: false },
  { label: "Kontakt", href: "/kontakt", implemented: false },
  { label: "Boka", href: "/boka", implemented: true },
];

export const footerNavigation: NavItem[] = [
  { label: "Distribution", href: "/distribution", implemented: false },
  { label: "Musikutgivning", href: "/musikutgivning", implemented: false },
  { label: "Trustpilot", href: "https://www.trustpilot.com/review/yellowmusicunited.se", implemented: true },
];
