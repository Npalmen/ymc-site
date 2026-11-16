import { site } from "../src/content/site";
import { homePage } from "../src/content/pages/home";
import { planningMeeting } from "../src/content/pages/shared";
import { singingAlso } from "../src/content/pages/singing";
import { legacyReviewIntro, singingAlsoSection } from "../src/content/feedback-2";
import { migrationPatch, type MigrationDoc } from "./nov4-migration";
import { withArrayKeys } from "./seed-keys";

/** Compose PR #6's migration with additive fields; never replace an editor's object. */
export function feedbackPatch(doc: MigrationDoc, planning?: MigrationDoc) {
  const previous = migrationPatch(doc);
  const next = { ...doc, ...previous.set };
  const set = { ...previous.set };
  const missing = (key: string, value: unknown) => {
    if (next[key] === undefined || next[key] === null) set[key] = value;
  };
  if (doc._type === "siteSettings") {
    missing("distributionEnabled", false);
    if (doc.feedback2Version !== 1) {
      missing("footerAbout", doc.description ?? site.footer.about);
      missing("footerAddress", [doc.legalName ?? site.legalName, doc.postalStreet ?? site.addresses.registered.street, `${doc.postalCode ?? site.addresses.registered.postalCode} ${doc.postalCity ?? site.addresses.registered.city}`].join("\n"));
      missing("footerStudio", `Studio: Starlight Studios, ${doc.studioArea ?? site.addresses.studio.area}. ${doc.studioStreet ?? site.addresses.studio.street}.`);
    }
    missing("bookingFormHeading", site.bookingForm.heading);
    missing("bookingFormSubmit", site.bookingForm.submitLabel);
    // Only initialize once: an editor can later clear an optional field in Studio.
    if (doc.feedback2Version !== 1) missing("bookingFormHelp", planning?.note ?? planningMeeting.note);
    missing("feedback2Version", 1);
  }
  if (doc._type === "homePage") {
    const reviews = doc.reviews as Record<string, unknown> | undefined;
    if (!reviews) set.reviews = { ...homePage.reviews, title: homePage.reviews.title.map(p => p.accent ? `*${p.text}*` : p.text).join("") };
    else {
      if (reviews.note === legacyReviewIntro) set["reviews.note"] = "";
      if (reviews.linkLabel === undefined) set["reviews.linkLabel"] = homePage.reviews.linkLabel;
    }
  }
  if (doc._type === "singingPage") {
    missing("alsoEnabled", true);
    missing("alsoTitle", singingAlsoSection.title);
    if (doc.feedback2Version !== 1) missing("alsoIntro", singingAlsoSection.intro);
    missing("also", withArrayKeys(singingAlso));
    missing("feedback2Version", 1);
  }
  if (doc._type === "contactPage" && doc.feedback2Version !== 1) {
    missing("studioCard", "");
    missing("feedback2Version", 1);
  }
  return { set, unset: previous.unset };
}
