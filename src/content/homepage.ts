/**
 * Homepage copy — verified from Phase 1 audit. Portal role (Area 02).
 */
export const homepage = {
  hero: {
    eyebrow: "Musikbolag · Uppsala",
    headline: "Låt oss växa tillsammans.",
    subheadline:
      "Vi är din navigator genom musikbranschen — med positivitet, trygghet och mod.",
    body: "Yellow Music United erbjuder vägledning och stöd genom din kreativa resa. Utforska våra fem kreativa världar — sång, studio, utbildning, utgivning och community.",
    primaryCta: { label: "Boka", href: "/boka" },
    secondaryCta: { label: "Utforska", href: "#utforska" },
    imageLabel: "Biim-Solrosfält — platsmarkör",
  },

  featured: {
    eyebrow: "Utvalt",
    title: "Sångpedagogik med trygghet i centrum",
    body: "Personlig sångcoaching och scennärvaro anpassat efter dig — nybörjare som erfaren. Utforska hela sång-världen på en egen sida.",
    imageLabel: "Sångpedagogik — platsmarkör",
    imageCaption: "Sång · personlig vägledning",
    cta: { label: "Till Sång", href: "/sang" },
    secondaryCta: { label: "Boka planeringsmöte", href: "/boka" },
  },

  about: {
    name: "Biim Frischenfeldt",
    role: "Grundare & VD · Yellow Music United sedan 2020",
    quote: "Vi verkar som en navigator genom musikbranschen.",
    body: "Yellow Music United grundades 2020 med målet att förena musik med människor. Våra värderingar — inkludering, jämställdhet och positiv kreativitet — genomsyrar allt vi gör.",
    imageLabel: "Porträtt — Biim Frischenfeldt",
    moreHref: "/yellow-music",
  },

  trust: {
    eyebrow: "Förtroende",
    title: "Byggt på relationer, inte på tomma löften",
    body: "Vi länkar till verifierade omdömen på Trustpilot. Inga inbäddade betyg eller påhittade recensioner — bara en ärlig inbjudan att läsa vad andra delat.",
    cta: {
      label: "Läs omdömen på Trustpilot",
      href: "https://www.trustpilot.com/review/yellowmusicunited.se",
    },
  },

  cta: {
    title: "Redo att ta nästa steg?",
    body: "Boka ett kostnadsfritt planeringsmöte — ett förutsättningslöst samtal om din kreativa resa.",
  },
} as const;

export type HomepageContent = typeof homepage;
