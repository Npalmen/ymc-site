export const site = {
  name: "Yellow Music United",
  legalName: "Yellow Music United AB",
  shortName: "Yellow Music",
  description:
    "Sånglektioner och sångpedagogik i Uppsala. Yellow Music United erbjuder sångkurs, utbildning, distribution och community.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://yellowmusicunited.se").replace(/\/$/, ""),
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
  footerLogo: null as string | null,
  communityEnabled: false,
  distributionEnabled: false,
  footer: {
    about: "Yellow Music United är ett musikbolag i Uppsala. Sånglektioner, utbildning och community - med positivitet, trygghet och mod.",
    address: "Yellow Music United AB\nMurargatan 1\n754 37, Uppsala",
    studio: "Studio: Starlight Studios, Uppsala. Murargatan 1.",
  },
  bookingForm: {
    heading: "Boka ett möte!",
    submitLabel: "Skicka förfrågan",
    helpText: "Formuläret öppnar ditt e-postprogram och skickar inget till en server. Bokning online är inte igång ännu.",
  },
  lineArt: null as string | null,
  lineArtOpacity: 0.06,
};

export type SiteConfig = typeof site;
