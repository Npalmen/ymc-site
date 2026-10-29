import { createClient } from "next-sanity";
import { aboutPage } from "../src/content/pages/about";
import { communityPage } from "../src/content/pages/community";
import { bookingPage, contactPage, faqPage } from "../src/content/pages/contact";
import { distributionPage } from "../src/content/pages/distribution";
import { educationHub, productionCourse, songwritingCourse } from "../src/content/pages/education";
import { homePage } from "../src/content/pages/home";
import { planningMeeting, planningTopics, reviewPlaceholders } from "../src/content/pages/shared";
import { lessonPackages, packagesPage, singingAlso, singingDifference, singingPage, stepsPage } from "../src/content/pages/singing";
import { bookingNavigation, serviceGroups, topLinks } from "../src/content/navigation";
import { site } from "../src/content/site";
import type { RichLine } from "../src/content/rich-text";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../src/sanity/env";
import { richToMarked } from "../src/sanity/rich";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN?.trim();

if (!token) {
  console.error("Saknar skrivtoken. Kör: SANITY_API_TOKEN=... npm run sanity:seed");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01",
  token,
  useCdn: false,
});

function marked(parts: RichLine) {
  return richToMarked(parts);
}

function slug(current: string) {
  return { _type: "slug", current };
}

const documents: { _id: string; _type: string; [key: string]: unknown }[] = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    name: site.name,
    legalName: site.legalName,
    shortName: site.shortName,
    description: site.description,
    email: site.contact.email,
    phone: site.contact.phone,
    bookingLabel: bookingNavigation.label,
    trustpilot: site.social.trustpilot,
    postalStreet: site.addresses.registered.street,
    postalCode: site.addresses.registered.postalCode,
    postalCity: site.addresses.registered.city,
    studioName: site.addresses.studio.label,
    studioStreet: site.addresses.studio.street,
    studioArea: site.addresses.studio.area,
    studioCity: site.addresses.studio.city,
    studioNote: site.addresses.studio.note,
    menuLinks: topLinks.map((link) => ({ _type: "menuLink", label: link.label, href: link.href })),
  },
  {
    _id: "homePage",
    _type: "homePage",
    hero: {
      eyebrow: homePage.hero.eyebrow,
      title: marked(homePage.hero.title),
      lede: homePage.hero.lede,
      primaryLabel: homePage.hero.primary.label,
      primaryHref: homePage.hero.primary.href,
      secondaryLabel: homePage.hero.secondary.label,
      secondaryHref: homePage.hero.secondary.href,
      meta: [...homePage.hero.meta],
      imageLabel: homePage.hero.imageLabel,
      imageCaption: homePage.hero.imageCaption,
    },
    paths: homePage.paths.map((path) => ({ _type: "homePath", ...path })),
    communityLabel: homePage.communityLink.label,
    communityHref: homePage.communityLink.href,
    soul: {
      eyebrow: homePage.soul.eyebrow,
      title: homePage.soul.title,
      lede: homePage.soul.lede,
      points: [...homePage.soul.points],
      imageLabel: homePage.soul.imageLabel,
      darkLabel: homePage.soul.dark.label,
      darkTitle: homePage.soul.dark.title,
      darkBody: homePage.soul.dark.body,
      darkCtaLabel: homePage.soul.dark.cta.label,
      darkCtaHref: homePage.soul.dark.cta.href,
    },
    reviews: {
      eyebrow: homePage.reviews.eyebrow,
      title: marked(homePage.reviews.title),
      note: homePage.reviews.note,
    },
    founder: {
      eyebrow: homePage.founder.eyebrow,
      title: marked(homePage.founder.title),
      body: homePage.founder.body,
      imageLabel: homePage.founder.imageLabel,
      ctaLabel: homePage.founder.cta.label,
      ctaHref: homePage.founder.cta.href,
    },
    close: { title: marked(homePage.close.title), body: homePage.close.body },
  },
  {
    _id: "singingPage",
    _type: "singingPage",
    metaDescription: singingPage.metaDescription,
    eyebrow: singingPage.eyebrow,
    title: marked(singingPage.title),
    lede: singingPage.lede,
    imageLabel: singingPage.imageLabel,
    difference: {
      eyebrow: singingDifference.eyebrow,
      title: marked(singingDifference.title),
      lede: singingDifference.lede,
      oursName: singingDifference.ours.name,
      oursSub: singingDifference.ours.sub,
      otherName: singingDifference.other.name,
      otherSub: singingDifference.other.sub,
      rows: singingDifference.rows.map((row) => ({ _type: "differenceRow", ...row })),
    },
    also: singingAlso.map((item) => ({ _type: "namedText", ...item })),
  },
  {
    _id: "stepsPage",
    _type: "stepsPage",
    metaDescription: stepsPage.metaDescription,
    eyebrow: stepsPage.eyebrow,
    title: marked(stepsPage.title),
    lede: stepsPage.lede,
    steps: stepsPage.steps.map((step) => ({ _type: "step", ...step })),
  },
  {
    _id: "packagesPage",
    _type: "packagesPage",
    metaDescription: packagesPage.metaDescription,
    eyebrow: packagesPage.eyebrow,
    title: marked(packagesPage.title),
    lede: packagesPage.lede,
    priceNotice: packagesPage.priceNotice,
  },
  {
    _id: "educationPage",
    _type: "educationPage",
    metaDescription: educationHub.metaDescription,
    eyebrow: educationHub.eyebrow,
    title: marked(educationHub.title),
    lede: educationHub.lede,
    praktik: educationHub.praktik,
  },
  {
    _id: "distributionPage",
    _type: "distributionPage",
    metaDescription: distributionPage.metaDescription,
    eyebrow: distributionPage.eyebrow,
    title: marked(distributionPage.title),
    lede: distributionPage.lede,
    imageLabel: distributionPage.imageLabel,
    blocks: distributionPage.blocks.map((block) => ({
      _type: "distributionBlock",
      id: block.id,
      title: block.title,
      paragraphs: [...block.paragraphs],
    })),
  },
  {
    _id: "communityPage",
    _type: "communityPage",
    metaDescription: communityPage.metaDescription,
    eyebrow: communityPage.eyebrow,
    title: marked(communityPage.title),
    lede: communityPage.lede,
    imageLabel: communityPage.imageLabel,
    paragraphs: [...communityPage.paragraphs],
    points: communityPage.points.map((point) => ({ _type: "cardText", ...point })),
  },
  {
    _id: "aboutPage",
    _type: "aboutPage",
    metaDescription: aboutPage.metaDescription,
    eyebrow: aboutPage.eyebrow,
    title: marked(aboutPage.title),
    paragraphs: [...aboutPage.paragraphs],
    quote: aboutPage.quote,
    voice: [...aboutPage.voice],
    imageLabel: aboutPage.imageLabel,
    timelineTitle: "Vägen hit",
    principles: {
      eyebrow: aboutPage.principles.eyebrow,
      title: marked(aboutPage.principles.title),
    },
    valuesLine: aboutPage.valuesLine,
    studio: {
      eyebrow: aboutPage.studio.eyebrow,
      title: aboutPage.studio.title,
      paragraphs: [...aboutPage.studio.paragraphs],
      imageLabel: aboutPage.studio.imageLabel,
    },
    partners: aboutPage.partners.map((partner) => ({ _type: "partner", ...partner })),
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    metaDescription: contactPage.metaDescription,
    eyebrow: contactPage.eyebrow,
    title: marked(contactPage.title),
    lede: contactPage.lede,
  },
  {
    _id: "bookingPage",
    _type: "bookingPage",
    metaDescription: bookingPage.metaDescription,
    eyebrow: bookingPage.eyebrow,
    title: marked(bookingPage.title),
    lede: bookingPage.lede,
  },
  {
    _id: "faqPage",
    _type: "faqPage",
    metaDescription: faqPage.metaDescription,
    eyebrow: faqPage.eyebrow,
    title: marked(faqPage.title),
    lede: faqPage.lede,
  },
  {
    _id: "planningPage",
    _type: "planningPage",
    eyebrow: planningMeeting.eyebrow,
    title: marked(planningMeeting.title),
    lede: planningMeeting.lede,
    points: [...planningMeeting.points],
    note: planningMeeting.note,
    topics: planningTopics.map((topic) => ({ _type: "topic", value: topic.value, label: topic.label })),
  },
];

lessonPackages.forEach((pack, order) => {
  documents.push({
    _id: `lessonPackage-${pack.id}`,
    _type: "lessonPackage",
    title: pack.title,
    slug: slug(pack.id),
    summary: pack.summary,
    price: pack.priceMissing ? "" : pack.price,
    priceMissing: pack.priceMissing,
    note: pack.note,
    points: [...pack.points],
    cta: pack.cta,
    href: pack.href,
    order,
  });
});

reviewPlaceholders.forEach((review, order) => {
  documents.push({
    _id: `review-${review.id}`,
    _type: "review",
    quote: review.quote,
    name: review.name,
    role: review.role,
    placeholder: true,
    order,
  });
});

faqPage.items.forEach((item, order) => {
  documents.push({
    _id: `faq-${order}`,
    _type: "faqItem",
    question: item.q,
    answer: item.a,
    order,
  });
});

aboutPage.timeline.forEach((item, order) => {
  documents.push({
    _id: `timeline-${order}`,
    _type: "timelineEntry",
    ...item,
    order,
  });
});

aboutPage.principles.items.forEach((item, order) => {
  documents.push({
    _id: `principle-${order}`,
    _type: "principle",
    number: item.n,
    title: item.title,
    body: item.body,
    order,
  });
});

serviceGroups.forEach((group, order) => {
  const slugValue = group.href.split("/").filter(Boolean).at(-1) ?? `grupp-${order}`;
  documents.push({
    _id: `service-${slugValue}`,
    _type: "service",
    title: group.label,
    slug: slug(slugValue),
    href: group.href,
    description: group.description,
    group: slugValue === "distribution" ? "distribution" : slugValue.includes("utbildning") ? "utbildning" : "sanglektioner",
    order,
    showInMenu: true,
    kind: "meny",
  });
  group.children.forEach((child, childOrder) => {
    const childSlug = child.href.split("/").filter(Boolean).at(-1) ?? `barn-${childOrder}`;
    documents.push({
      _id: `service-${childSlug}`,
      _type: "service",
      title: child.label,
      slug: slug(childSlug),
      href: child.href,
      description: child.description ?? "",
      group: slugValue.includes("utbildning") ? "utbildning" : "sanglektioner",
      parentSlug: slugValue,
      order: childOrder,
      showInMenu: true,
      kind: "meny",
    });
  });
});

function courseDoc(id: string, slugValue: string, course: typeof productionCourse, order: number) {
  documents.push({
    _id: id,
    _type: "course",
    title: course.metaTitle,
    slug: slug(slugValue),
    metaDescription: course.metaDescription,
    eyebrow: course.eyebrow,
    heading: marked(course.title),
    lede: course.lede,
    imageLabel: course.imageLabel,
    sections: course.sections.map((section) => ({
      _type: "courseSection",
      heading: section.heading,
      paragraphs: [...section.paragraphs],
    })),
    points: [...course.points],
    missing: course.missing,
    ctaLabel: course.cta.label,
    ctaHref: course.cta.href,
    topic: course.topic,
    order,
  });
}

courseDoc("course-musikproduktion", "musikproduktion-for-tjejer", productionCourse, 0);
courseDoc("course-latskrivning", "latskrivning", songwritingCourse, 1);

const tx = client.transaction();
for (const doc of documents) tx.createOrReplace(doc);
tx.commit()
  .then(() => {
    console.log(`Skrev ${documents.length} dokument till ${projectId}/${dataset}.`);
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
