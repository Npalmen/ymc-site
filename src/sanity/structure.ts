import type { StructureResolver } from "sanity/structure";

function singleton(S: Parameters<StructureResolver>[0], type: string, title: string, id: string) {
  return S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(type).documentId(id).title(title));
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Innehåll")
    .items([
      singleton(S, "siteSettings", "Webbplats och kontaktuppgifter", "siteSettings"),
      singleton(S, "homePage", "Startsida", "homePage"),
      S.divider(),
      singleton(S, "singingPage", "Sånglektioner", "singingPage"),
      singleton(S, "stepsPage", "Steg för steg", "stepsPage"),
      singleton(S, "packagesPage", "Lektionspaket, inledning", "packagesPage"),
      S.documentTypeListItem("lessonPackage").title("Lektionspaket"),
      S.divider(),
      singleton(S, "educationPage", "Utbildning", "educationPage"),
      S.documentTypeListItem("course").title("Kurser"),
      singleton(S, "distributionPage", "Distribution", "distributionPage"),
      singleton(S, "communityPage", "Community", "communityPage"),
      S.divider(),
      singleton(S, "aboutPage", "Om oss", "aboutPage"),
      S.documentTypeListItem("timelineEntry").title("Tidslinje"),
      S.documentTypeListItem("principle").title("Principer"),
      S.divider(),
      singleton(S, "contactPage", "Kontakt", "contactPage"),
      singleton(S, "bookingPage", "Boka", "bookingPage"),
      singleton(S, "planningPage", "Planeringsmöte", "planningPage"),
      singleton(S, "faqPage", "FAQ, inledning", "faqPage"),
      S.documentTypeListItem("faqItem").title("Frågor och svar"),
      S.documentTypeListItem("review").title("Recensioner"),
      S.divider(),
      S.documentTypeListItem("service").title("Tjänster i menyn"),
    ]);
