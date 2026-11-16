export const legacyReviewIntro = "Rutorna är platshållare. Yellow Music publicerar inte påhittade recensioner eller betyg. Verifierade omdömen ligger på Trustpilot tills riktiga texter får en plats här.";

export function reviewIntro(value?: string | null) {
  return !value || value.trim() === legacyReviewIntro ? "" : value;
}

export const singingAlsoSection = {
  enabled: true,
  title: "Också inom sången",
  intro: "De här spåren finns i pedagogiken. De har inga egna sidor ännu, och bokas via samma samtal.",
};
