export const site = {
  name: "Yellow Music United",
  legalName: "Yellow Music United AB",
  shortName: "Yellow Music",
  description:
    "Yellow Music United är ett musikbolag i Uppsala. Sånglektioner, utbildning, distribution och community — med positivitet, trygghet och mod.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ymc-site.vercel.app",
  locale: "sv-SE",
  contact: {
    email: "info@yellowmusicunited.se",
    phone: "+46 730 80 52 69",
    phoneHref: "tel:+46730805269",
  },
  addresses: {
    registered: {
      label: "Postadress",
      street: "Östra Ågatan 67",
      postalCode: "754 22",
      city: "Uppsala",
      country: "SE",
    },
    studio: {
      label: "Starlight Studios",
      street: "Svederusgatan 3A",
      area: "Fyrislund",
      city: "Uppsala",
      country: "SE",
      note: "Kontor och inspelningsstudio delar lokal.",
    },
  },
  social: {
    trustpilot: "https://www.trustpilot.com/review/yellowmusicunited.se",
  },
  /** CMS logo URL. Null uses the wordmark shipped in /brand. */
  logo: null as string | null,
};

export type SiteConfig = typeof site;
