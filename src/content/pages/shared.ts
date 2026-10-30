export const planningTopics = [
  { value: "planering", label: "Kostnadsfritt planeringsmöte" },
  { value: "prova-pa", label: "Prova på-lektion i sång (kostnadsfri)" },
  { value: "sex-tillfallen", label: "Sångkurs, sex tillfällen" },
  { value: "tolv-tillfallen", label: "Sångkurs, tolv tillfällen" },
  { value: "musikproduktion", label: "Musikproduktion för tjejer" },
  { value: "latskrivning", label: "Låtskrivning" },
  { value: "distribution", label: "Distribution och utgivning" },
  { value: "studio", label: "Starlight Studios" },
  { value: "community", label: "Community" },
  { value: "annat", label: "Annat" },
] as const;

export type PlanningTopic = (typeof planningTopics)[number]["value"];

export const planningMeeting = {
  eyebrow: "Kostnadsfritt",
  title: [
    { text: "Boka ett kostnadsfritt " },
    { text: "planeringsmöte", accent: true },
    { text: "." },
  ],
  lede: "Trettio minuter att prata om var du är och vad nästa steg är. Ingen pitch, ingen bindning. Vi återkommer och bokar tiden med dig.",
  points: [
    "Du pratar med Yellow Music, inte med en säljare",
    "Vi svarar på mejlet, vanligtvis inom en vardag",
    "Första sånglektionen kan vara ett eget kostnadsfritt tillfälle",
    "Ingen bindning och ingen färdig säljpitch",
  ],
  note: "Formuläret öppnar ditt e-postprogram och skickar inget till en server. Bokning online är inte igång ännu.",
};

/**
 * Layout slots for real reviews. None of these are testimonials.
 * Do not replace with invented names, quotes, or star ratings.
 */
export const reviewPlaceholders = [
  {
    id: "slot-1",
    quote:
      "Platshållare. Ett riktigt omdöme från en elev eller förälder visas här när det får publiceras.",
    name: "Namn saknas",
    role: "Källa saknas",
  },
  {
    id: "slot-2",
    quote:
      "Platshållare. Här kan en recension från Google eller Trustpilot ligga, med personens egna ord.",
    name: "Namn saknas",
    role: "Källa saknas",
  },
  {
    id: "slot-3",
    quote:
      "Platshållare. Betyg och namn hämtas från källan. Inget i de här rutorna är påhittat.",
    name: "Namn saknas",
    role: "Källa saknas",
  },
] as const;
