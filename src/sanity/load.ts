import { cache } from "react";
import { aboutPage } from "@/content/pages/about";
import { communityPage } from "@/content/pages/community";
import { bookingPage, contactPage, faqPage } from "@/content/pages/contact";
import { distributionPage } from "@/content/pages/distribution";
import { educationHub, productionCourse, songwritingCourse, type CoursePageContent } from "@/content/pages/education";
import { homePage } from "@/content/pages/home";
import { planningMeeting, planningTopics, reviewPlaceholders, type PlanningTopic } from "@/content/pages/shared";
import {
  lessonPackages,
  packagesPage,
  singingAlso,
  singingDifference,
  singingPage,
  stepsPage,
} from "@/content/pages/singing";
import {
  bookingNavigation,
  footerColumns,
  serviceGroups,
  topLinks,
  type NavLink,
  type ServiceGroup,
} from "@/content/navigation";
import { site, type SiteConfig } from "@/content/site";
import type { RichLine } from "@/content/rich-text";
import { sanityFetch } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { cmsImageUrl, hasCmsImage, type CmsImage } from "@/sanity/image";
import { richField } from "@/sanity/rich";

export type ExtraSection = {
  heading: string;
  text: string;
  image: CmsImage | null;
};

export type LoadedNav = {
  serviceGroups: ServiceGroup[];
  topLinks: NavLink[];
  booking: NavLink;
  footerColumns: { title: string; links: NavLink[] }[];
};

const imageProjection = "alt, hotspot, crop, asset{_ref, _type}";

function text(value: string | null | undefined, fallback: string) {
  return value && value.trim() ? value : fallback;
}

function lines(value: string[] | null | undefined, fallback: readonly string[]) {
  if (!value) return [...fallback];
  return value;
}

function imageOf(value: CmsImage | null | undefined): CmsImage | null {
  return value?.asset?._ref ? value : null;
}

function extras(value: ExtraSection[] | null | undefined): ExtraSection[] {
  if (!value) return [];
  return value
    .filter((section) => section?.heading)
    .map((section) => ({
      heading: section.heading,
      text: section.text ?? "",
      image: imageOf(section.image),
    }));
}

function phoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? `tel:${digits}` : `tel:+${digits}`;
}

export const cmsReady = cache(async () => {
  if (!isSanityConfigured()) return false;
  const doc = await sanityFetch<{ _id: string } | null>(`*[_id == "siteSettings"][0]{ _id }`);
  return Boolean(doc?._id);
});

export const loadSite = cache(async (): Promise<SiteConfig> => {
  if (!(await cmsReady())) return site;
  const doc = await sanityFetch<{
    name?: string;
    legalName?: string;
    shortName?: string;
    description?: string;
    email?: string;
    phone?: string;
    trustpilot?: string;
    postalStreet?: string;
    postalCode?: string;
    postalCity?: string;
    studioName?: string;
    studioStreet?: string;
    studioArea?: string;
    studioCity?: string;
    studioNote?: string;
    logo?: CmsImage | null;
  } | null>(`*[_id == "siteSettings"][0]`);
  if (!doc) return site;
  const phone = text(doc.phone, site.contact.phone);
  return {
    ...site,
    name: text(doc.name, site.name),
    legalName: text(doc.legalName, site.legalName),
    shortName: text(doc.shortName, site.shortName),
    description: text(doc.description, site.description),
    logo: hasCmsImage(doc.logo) ? cmsImageUrl(doc.logo, 1280, "max") : null,
    contact: {
      email: text(doc.email, site.contact.email),
      phone,
      phoneHref: phoneHref(phone),
    },
    addresses: {
      registered: {
        ...site.addresses.registered,
        street: text(doc.postalStreet, site.addresses.registered.street),
        postalCode: text(doc.postalCode, site.addresses.registered.postalCode),
        city: text(doc.postalCity, site.addresses.registered.city),
      },
      studio: {
        ...site.addresses.studio,
        label: text(doc.studioName, site.addresses.studio.label),
        street: text(doc.studioStreet, site.addresses.studio.street),
        area: text(doc.studioArea, site.addresses.studio.area),
        city: text(doc.studioCity, site.addresses.studio.city),
        note: text(doc.studioNote, site.addresses.studio.note),
      },
    },
    social: {
      trustpilot: text(doc.trustpilot, site.social.trustpilot),
    },
  };
});

type ServiceDoc = {
  title: string;
  slug?: string;
  href: string;
  description?: string;
  group: string;
  parentSlug?: string;
  order?: number;
  showInMenu?: boolean;
  kind?: string;
  lede?: string;
  paragraphs?: string[];
  points?: string[];
  image?: CmsImage | null;
  imageLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  extraSections?: ExtraSection[];
};

const sectionAnchors: Record<string, string> = {
  "/tjanster/sanglektioner/steg-for-steg": "/tjanster/sanglektioner#steg-for-steg",
  "/tjanster/sanglektioner/lektionspaket": "/tjanster/sanglektioner#lektionspaket",
};

function menuHref(href: string) {
  return sectionAnchors[href] ?? href;
}

export const loadNavigation = cache(async (): Promise<LoadedNav> => {
  const settings = await loadSite();
  if (!(await cmsReady())) {
    return { serviceGroups, topLinks, booking: bookingNavigation, footerColumns };
  }
  const [services, menu] = await Promise.all([
    sanityFetch<ServiceDoc[] | null>(
      `*[_type == "service" && showInMenu != false] | order(order asc){
        title, "slug": slug.current, href, description, group, parentSlug, order, showInMenu
      }`,
    ),
    sanityFetch<{ bookingLabel?: string; menuLinks?: NavLink[] } | null>(
      `*[_id == "siteSettings"][0]{ bookingLabel, menuLinks[]{ label, href } }`,
    ),
  ]);
  const links = menu?.menuLinks?.filter((link) => link.label && link.href) ?? topLinks;
  const booking = {
    label: text(menu?.bookingLabel, bookingNavigation.label),
    href: bookingNavigation.href,
  };
  const roots = (services ?? []).filter((item) => !item.parentSlug);
  const groups: ServiceGroup[] =
    roots.length > 0
      ? roots.map((root) => ({
          label: root.title,
          href: root.href,
          description: root.description ?? "",
          children: (services ?? [])
            .filter((item) => item.parentSlug && item.parentSlug === root.slug)
            .map((item) => ({ label: item.title, href: menuHref(item.href), description: item.description })),
        }))
      : serviceGroups;
  const serviceLinks = groups.flatMap((group) => [
    { label: group.label, href: group.href },
    ...group.children.map((child) => ({ label: child.label, href: child.href })),
  ]);
  return {
    serviceGroups: groups,
    topLinks: links,
    booking,
    footerColumns: [
      { title: "Tjänster", links: serviceLinks },
      {
        title: settings.shortName,
        links: [...links, booking, { label: "Alla tjänster", href: "/tjanster" }],
      },
    ],
  };
});

export type LoadedHome = typeof homePage & {
  hero: (typeof homePage.hero) & { image: CmsImage | null };
  founder: (typeof homePage.founder) & { image: CmsImage | null };
  soul: (typeof homePage.soul) & { image: CmsImage | null };
  reviewItems: { id: string; quote: string; name: string; role: string; rating: number | null; placeholder: boolean }[];
  extraSections: ExtraSection[];
};

export const loadHome = cache(async (): Promise<LoadedHome> => {
  const base: LoadedHome = {
    ...homePage,
    hero: { ...homePage.hero, image: null },
    founder: { ...homePage.founder, image: null },
    soul: { ...homePage.soul, image: null },
    reviewItems: reviewPlaceholders.map((item) => ({ ...item, rating: null, placeholder: true })),
    extraSections: [],
  };
  if (!(await cmsReady())) return base;
  const doc = await sanityFetch<{
    hero?: {
      eyebrow?: string;
      title?: string;
      lede?: string;
      primaryLabel?: string;
      primaryHref?: string;
      secondaryLabel?: string;
      secondaryHref?: string;
      meta?: string[];
      imageLabel?: string;
      imageCaption?: string;
      image?: CmsImage;
    };
    paths?: LoadedHome["paths"];
    communityLabel?: string;
    communityHref?: string;
    soul?: {
      eyebrow?: string;
      title?: string;
      lede?: string;
      points?: string[];
      imageLabel?: string;
      image?: CmsImage;
      darkLabel?: string;
      darkTitle?: string;
      darkBody?: string;
      darkCtaLabel?: string;
      darkCtaHref?: string;
    };
    reviews?: { eyebrow?: string; title?: string; note?: string };
    founder?: {
      eyebrow?: string;
      title?: string;
      body?: string;
      imageLabel?: string;
      ctaLabel?: string;
      ctaHref?: string;
      image?: CmsImage;
    };
    close?: { title?: string; body?: string };
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "homePage"][0]{
    hero{ eyebrow, title, lede, primaryLabel, primaryHref, secondaryLabel, secondaryHref, meta, imageLabel, imageCaption, image{${imageProjection}} },
    paths[]{ n, title, note, href },
    communityLabel, communityHref,
    soul{ eyebrow, title, lede, points, imageLabel, image{${imageProjection}}, darkLabel, darkTitle, darkBody, darkCtaLabel, darkCtaHref },
    reviews{ eyebrow, title, note },
    founder{ eyebrow, title, body, imageLabel, ctaLabel, ctaHref, image{${imageProjection}} },
    close{ title, body },
    extraSections[]{ heading, text, image{${imageProjection}} }
  }`);
  const reviews = await loadReviews();
  if (!doc) return { ...base, reviewItems: reviews };
  const hero = doc.hero;
  const soul = doc.soul;
  const founder = doc.founder;
  return {
    ...base,
    hero: {
      eyebrow: text(hero?.eyebrow, base.hero.eyebrow),
      title: richField(hero?.title, base.hero.title) as typeof base.hero.title,
      lede: text(hero?.lede, base.hero.lede),
      primary: {
        label: text(hero?.primaryLabel, base.hero.primary.label),
        href: text(hero?.primaryHref, base.hero.primary.href),
      },
      secondary: {
        label: text(hero?.secondaryLabel, base.hero.secondary.label),
        href: text(hero?.secondaryHref, base.hero.secondary.href),
      },
      meta: lines(hero?.meta, base.hero.meta) as unknown as typeof base.hero.meta,
      imageLabel: text(hero?.imageLabel, base.hero.imageLabel),
      imageCaption: text(hero?.imageCaption, base.hero.imageCaption),
      image: imageOf(hero?.image),
    },
    paths: doc.paths?.length ? doc.paths : base.paths,
    communityLink: {
      label: text(doc.communityLabel, base.communityLink.label),
      href: text(doc.communityHref, base.communityLink.href),
    },
    soul: {
      eyebrow: text(soul?.eyebrow, base.soul.eyebrow),
      title: text(soul?.title, base.soul.title),
      lede: text(soul?.lede, base.soul.lede),
      points: lines(soul?.points, base.soul.points) as unknown as typeof base.soul.points,
      imageLabel: text(soul?.imageLabel, base.soul.imageLabel),
      image: imageOf(soul?.image),
      dark: {
        label: text(soul?.darkLabel, base.soul.dark.label),
        title: text(soul?.darkTitle, base.soul.dark.title),
        body: text(soul?.darkBody, base.soul.dark.body),
        cta: {
          label: text(soul?.darkCtaLabel, base.soul.dark.cta.label),
          href: text(soul?.darkCtaHref, base.soul.dark.cta.href),
        },
      },
    },
    reviews: {
      eyebrow: text(doc.reviews?.eyebrow, base.reviews.eyebrow),
      title: richField(doc.reviews?.title, base.reviews.title) as typeof base.reviews.title,
      note: text(doc.reviews?.note, base.reviews.note),
    },
    founder: {
      eyebrow: text(founder?.eyebrow, base.founder.eyebrow),
      title: richField(founder?.title, base.founder.title) as typeof base.founder.title,
      body: text(founder?.body, base.founder.body),
      imageLabel: text(founder?.imageLabel, base.founder.imageLabel),
      cta: {
        label: text(founder?.ctaLabel, base.founder.cta.label),
        href: text(founder?.ctaHref, base.founder.cta.href),
      },
      image: imageOf(founder?.image),
    },
    close: {
      title: richField(doc.close?.title, base.close.title) as typeof base.close.title,
      body: text(doc.close?.body, base.close.body),
    },
    reviewItems: reviews,
    extraSections: extras(doc.extraSections),
  };
});

export const loadReviews = cache(async () => {
  const fallback = reviewPlaceholders.map((item) => ({
    ...item,
    rating: null as number | null,
    placeholder: true,
  }));
  if (!(await cmsReady())) return fallback;
  const docs = await sanityFetch<
    { id: string; quote: string; name: string; role?: string; rating?: number | null; placeholder?: boolean }[] | null
  >(
    `*[_type == "review"] | order(order asc){
      "id": _id, quote, name, role, rating, placeholder
    }`,
  );
  if (!docs) return fallback;
  return docs.map((item) => ({
    id: item.id,
    quote: item.quote,
    name: item.name,
    role: item.role ?? "",
    rating: item.rating ?? null,
    placeholder: item.placeholder !== false,
  }));
});

export const loadPackages = cache(async () => {
  if (!(await cmsReady())) return { page: packagesPage, packages: lessonPackages, extraSections: [] as ExtraSection[] };
  const [page, packages] = await Promise.all([
    sanityFetch<{
      eyebrow?: string;
      title?: string;
      lede?: string;
      priceNotice?: string;
      metaDescription?: string;
      extraSections?: ExtraSection[];
    } | null>(`*[_id == "packagesPage"][0]{ eyebrow, title, lede, priceNotice, metaDescription, extraSections[]{ heading, text, image{${imageProjection}} } }`),
    sanityFetch<
      {
        id: string;
        title: string;
        summary: string;
        price?: string;
        priceMissing?: boolean;
        note?: string;
        points?: string[];
        cta?: string;
        href?: string;
      }[] | null
    >(
      `*[_type == "lessonPackage"] | order(order asc){
        "id": slug.current, title, summary, price, priceMissing, note, points, cta, href
      }`,
    ),
  ]);
  return {
    page: {
      ...packagesPage,
      metaDescription: text(page?.metaDescription, packagesPage.metaDescription),
      eyebrow: text(page?.eyebrow, packagesPage.eyebrow),
      title: richField(page?.title, packagesPage.title),
      lede: text(page?.lede, packagesPage.lede),
      priceNotice: text(page?.priceNotice, packagesPage.priceNotice),
    },
    packages:
      packages?.map((item) => ({
        id: item.id,
        title: item.title,
        summary: item.summary,
        price: item.priceMissing || !item.price ? "Pris saknas" : item.price,
        priceMissing: Boolean(item.priceMissing || !item.price),
        note: item.note ?? "",
        points: item.points ?? [],
        cta: item.cta || "Boka nu",
        href: item.href || "/boka",
      })) ?? lessonPackages,
    extraSections: extras(page?.extraSections),
  };
});

export const loadSinging = cache(async () => {
  const base = { page: singingPage, difference: singingDifference, also: singingAlso, image: null as CmsImage | null, extraSections: [] as ExtraSection[] };
  if (!(await cmsReady())) return base;
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    imageLabel?: string;
    image?: CmsImage;
    metaDescription?: string;
    difference?: {
      eyebrow?: string;
      title?: string;
      lede?: string;
      oursName?: string;
      oursSub?: string;
      otherName?: string;
      otherSub?: string;
      rows?: { label: string; ours: string; other: string }[];
    };
    also?: { title: string; body: string }[];
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "singingPage"][0]{
    eyebrow, title, lede, imageLabel, metaDescription,
    image{${imageProjection}},
    difference{ eyebrow, title, lede, oursName, oursSub, otherName, otherSub, rows[]{ label, ours, other } },
    also[]{ title, body },
    extraSections[]{ heading, text, image{${imageProjection}} }
  }`);
  if (!doc) return base;
  const difference = doc.difference;
  return {
    page: {
      ...singingPage,
      metaDescription: text(doc.metaDescription, singingPage.metaDescription),
      eyebrow: text(doc.eyebrow, singingPage.eyebrow),
      title: richField(doc.title, singingPage.title),
      lede: text(doc.lede, singingPage.lede),
      imageLabel: text(doc.imageLabel, singingPage.imageLabel),
    },
    difference: {
      eyebrow: text(difference?.eyebrow, singingDifference.eyebrow),
      title: richField(difference?.title, singingDifference.title),
      lede: text(difference?.lede, singingDifference.lede),
      ours: {
        name: text(difference?.oursName, singingDifference.ours.name),
        sub: text(difference?.oursSub, singingDifference.ours.sub),
      },
      other: {
        name: text(difference?.otherName, singingDifference.other.name),
        sub: text(difference?.otherSub, singingDifference.other.sub),
      },
      rows: difference?.rows?.length ? difference.rows : singingDifference.rows,
    },
    also: doc.also?.length ? doc.also : singingAlso,
    image: imageOf(doc.image),
    extraSections: extras(doc.extraSections),
  };
});

export const loadSteps = cache(async () => {
  if (!(await cmsReady())) return { ...stepsPage, extraSections: [] as ExtraSection[] };
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    metaDescription?: string;
    steps?: { n: string; title: string; body: string }[];
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "stepsPage"][0]{ eyebrow, title, lede, metaDescription, steps[]{ n, title, body }, extraSections[]{ heading, text, image{${imageProjection}} } }`);
  if (!doc) return { ...stepsPage, extraSections: [] as ExtraSection[] };
  return {
    ...stepsPage,
    metaDescription: text(doc.metaDescription, stepsPage.metaDescription),
    eyebrow: text(doc.eyebrow, stepsPage.eyebrow),
    title: richField(doc.title, stepsPage.title),
    lede: text(doc.lede, stepsPage.lede),
    steps: doc.steps?.length ? doc.steps : stepsPage.steps,
    extraSections: extras(doc.extraSections),
  };
});

const courseFallbacks: Record<string, CoursePageContent> = {
  "musikproduktion-for-tjejer": productionCourse,
  latskrivning: songwritingCourse,
};

function mapCourse(slug: string, doc: {
  title?: string;
  metaDescription?: string;
  eyebrow?: string;
  heading?: string;
  lede?: string;
  imageLabel?: string;
  image?: CmsImage;
  sections?: { heading: string; paragraphs?: string[] }[];
  points?: string[];
  missing?: string;
  ctaLabel?: string;
  ctaHref?: string;
  topic?: string;
  extraSections?: ExtraSection[];
} | null, fallback?: CoursePageContent): (CoursePageContent & { image: CmsImage | null; extraSections: ExtraSection[] }) | null {
  if (!doc && !fallback) return null;
  const base = fallback ?? {
    metaTitle: doc?.title ?? slug,
    metaDescription: doc?.metaDescription ?? "",
    eyebrow: doc?.eyebrow ?? "Utbildning",
    title: [{ text: doc?.title ?? slug }] as RichLine,
    lede: doc?.lede ?? "",
    imageLabel: doc?.imageLabel ?? "Foto saknas",
    sections: [],
    points: [],
    missing: doc?.missing ?? "",
    cta: { label: doc?.ctaLabel ?? "Ansök nu", href: doc?.ctaHref ?? "/boka" },
    topic: doc?.topic ?? "annat",
  };
  return {
    ...base,
    metaTitle: text(doc?.title, base.metaTitle),
    metaDescription: text(doc?.metaDescription, base.metaDescription),
    eyebrow: text(doc?.eyebrow, base.eyebrow),
    title: richField(doc?.heading, base.title),
    lede: text(doc?.lede, base.lede),
    imageLabel: text(doc?.imageLabel, base.imageLabel),
    sections: doc?.sections?.length
      ? doc.sections.map((section) => ({ heading: section.heading, paragraphs: section.paragraphs ?? [] }))
      : base.sections,
    points: doc?.points ?? base.points,
    missing: text(doc?.missing, base.missing),
    cta: {
      label: text(doc?.ctaLabel, base.cta.label),
      href: text(doc?.ctaHref, base.cta.href),
    },
    topic: text(doc?.topic, base.topic),
    image: imageOf(doc?.image),
    extraSections: extras(doc?.extraSections),
  };
}

const courseQuery = `*[_type == "course" && slug.current == $slug][0]{
  title, metaDescription, eyebrow, heading, lede, imageLabel, topic, missing, ctaLabel, ctaHref,
  image{${imageProjection}},
  sections[]{ heading, paragraphs },
  points,
  extraSections[]{ heading, text, image{${imageProjection}} }
}`;

export const loadCourse = cache(async (slug: string) => {
  const fallback = courseFallbacks[slug];
  if (!(await cmsReady())) {
    return fallback ? mapCourse(slug, null, fallback) : null;
  }
  const doc = await sanityFetch<Parameters<typeof mapCourse>[1]>(courseQuery, { slug });
  return mapCourse(slug, doc, fallback);
});

export const loadEducation = cache(async () => {
  const fallbackCourses = educationHub.courses;
  if (!(await cmsReady())) {
    return { page: educationHub, courses: fallbackCourses, extraSections: [] as ExtraSection[] };
  }
  const [page, courses] = await Promise.all([
    sanityFetch<{
      eyebrow?: string;
      title?: string;
      lede?: string;
      praktik?: string;
      metaDescription?: string;
      extraSections?: ExtraSection[];
    } | null>(`*[_id == "educationPage"][0]{ eyebrow, title, lede, praktik, metaDescription, extraSections[]{ heading, text, image{${imageProjection}} } }`),
    sanityFetch<{ title: string; slug: string; lede?: string; order?: number }[] | null>(
      `*[_type == "course"] | order(order asc){ title, "slug": slug.current, lede, order }`,
    ),
  ]);
  const mapped =
    courses?.filter((course) => course.slug).map((course, index) => ({
      n: String(index + 1).padStart(2, "0"),
      title: course.title,
      note: course.lede ?? "",
      href: `/tjanster/utbildning/${course.slug}`,
    })) ?? fallbackCourses;
  return {
    page: {
      ...educationHub,
      metaDescription: text(page?.metaDescription, educationHub.metaDescription),
      eyebrow: text(page?.eyebrow, educationHub.eyebrow),
      title: richField(page?.title, educationHub.title),
      lede: text(page?.lede, educationHub.lede),
      praktik: text(page?.praktik, educationHub.praktik),
    },
    courses: mapped.length ? mapped : fallbackCourses,
    extraSections: extras(page?.extraSections),
  };
});

export const loadDistribution = cache(async () => {
  const base = { ...distributionPage, image: null as CmsImage | null, extraSections: [] as ExtraSection[] };
  if (!(await cmsReady())) return base;
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    imageLabel?: string;
    metaDescription?: string;
    image?: CmsImage;
    blocks?: { id: string; title: string; paragraphs: string[] }[];
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "distributionPage"][0]{
    eyebrow, title, lede, imageLabel, metaDescription, image{${imageProjection}},
    blocks[]{ id, title, paragraphs },
    extraSections[]{ heading, text, image{${imageProjection}} }
  }`);
  if (!doc) return base;
  return {
    ...base,
    metaDescription: text(doc.metaDescription, base.metaDescription),
    eyebrow: text(doc.eyebrow, base.eyebrow),
    title: richField(doc.title, base.title),
    lede: text(doc.lede, base.lede),
    imageLabel: text(doc.imageLabel, base.imageLabel),
    image: imageOf(doc.image),
    blocks: doc.blocks?.length ? doc.blocks : base.blocks,
    extraSections: extras(doc.extraSections),
  };
});

export const loadCommunity = cache(async () => {
  const base = { ...communityPage, image: null as CmsImage | null, extraSections: [] as ExtraSection[] };
  if (!(await cmsReady())) return base;
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    imageLabel?: string;
    metaDescription?: string;
    image?: CmsImage;
    paragraphs?: string[];
    points?: { title: string; body: string }[];
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "communityPage"][0]{
    eyebrow, title, lede, imageLabel, metaDescription, paragraphs, points[]{ title, body },
    image{${imageProjection}}, extraSections[]{ heading, text, image{${imageProjection}} }
  }`);
  if (!doc) return base;
  return {
    ...base,
    metaDescription: text(doc.metaDescription, base.metaDescription),
    eyebrow: text(doc.eyebrow, base.eyebrow),
    title: richField(doc.title, base.title),
    lede: text(doc.lede, base.lede),
    imageLabel: text(doc.imageLabel, base.imageLabel),
    image: imageOf(doc.image),
    paragraphs: doc.paragraphs?.length ? doc.paragraphs : base.paragraphs,
    points: doc.points?.length ? doc.points : base.points,
    extraSections: extras(doc.extraSections),
  };
});

export const loadAbout = cache(async () => {
  const base = {
    ...aboutPage,
    portrait: null as CmsImage | null,
    studioImage: null as CmsImage | null,
    extraSections: [] as ExtraSection[],
    timeline: aboutPage.timeline,
    principles: aboutPage.principles,
    timelineTitle: "Vägen hit",
  };
  if (!(await cmsReady())) return base;
  const [doc, timeline, principles] = await Promise.all([
    sanityFetch<{
      eyebrow?: string;
      title?: string;
      paragraphs?: string[];
      quote?: string;
      voice?: string[];
      imageLabel?: string;
      portrait?: CmsImage;
      timelineTitle?: string;
      principles?: { eyebrow?: string; title?: string };
      valuesLine?: string;
      studio?: {
        eyebrow?: string;
        title?: string;
        paragraphs?: string[];
        imageLabel?: string;
        image?: CmsImage;
      };
      metaDescription?: string;
      extraSections?: ExtraSection[];
    } | null>(`*[_id == "aboutPage"][0]{
      eyebrow, title, paragraphs, quote, voice, imageLabel, timelineTitle, valuesLine, metaDescription,
      portrait{${imageProjection}},
      principles{ eyebrow, title },
      studio{ eyebrow, title, paragraphs, imageLabel, image{${imageProjection}} },
      extraSections[]{ heading, text, image{${imageProjection}} }
    }`),
    sanityFetch<{ year: string; tag: string; title: string; body: string }[] | null>(
      `*[_type == "timelineEntry"] | order(order asc){ year, tag, title, body }`,
    ),
    sanityFetch<{ n: string; title: string; body: string }[] | null>(
      `*[_type == "principle"] | order(order asc){ "n": number, title, body }`,
    ),
  ]);
  if (!doc) return { ...base, timeline: timeline?.length ? timeline : base.timeline, principles: { ...base.principles, items: principles?.length ? principles : base.principles.items } };
  return {
    ...base,
    metaDescription: text(doc.metaDescription, base.metaDescription),
    eyebrow: text(doc.eyebrow, base.eyebrow),
    title: richField(doc.title, base.title),
    paragraphs: doc.paragraphs?.length ? doc.paragraphs : base.paragraphs,
    quote: text(doc.quote, base.quote),
    voice: doc.voice?.length ? doc.voice : base.voice,
    imageLabel: text(doc.imageLabel, base.imageLabel),
    portrait: imageOf(doc.portrait),
    timelineTitle: text(doc.timelineTitle, "Vägen hit"),
    principles: {
      eyebrow: text(doc.principles?.eyebrow, base.principles.eyebrow),
      title: richField(doc.principles?.title, base.principles.title),
      items: principles?.length ? principles : base.principles.items,
    },
    valuesLine: text(doc.valuesLine, base.valuesLine),
    studio: {
      eyebrow: text(doc.studio?.eyebrow, base.studio.eyebrow),
      title: text(doc.studio?.title, base.studio.title),
      paragraphs: doc.studio?.paragraphs?.length ? doc.studio.paragraphs : base.studio.paragraphs,
      imageLabel: text(doc.studio?.imageLabel, base.studio.imageLabel),
    },
    studioImage: imageOf(doc.studio?.image),
    timeline: timeline?.length ? timeline : base.timeline,
    extraSections: extras(doc.extraSections),
  };
});

async function loadIntro(
  id: string,
  fallback: { metaTitle: string; metaDescription: string; eyebrow: string; title: RichLine; lede: string },
) {
  if (!(await cmsReady())) return { ...fallback, extraSections: [] as ExtraSection[] };
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    metaDescription?: string;
    extraSections?: ExtraSection[];
  } | null>(`*[_id == "${id}"][0]{ eyebrow, title, lede, metaDescription, extraSections[]{ heading, text, image{${imageProjection}} } }`);
  if (!doc) return { ...fallback, extraSections: [] as ExtraSection[] };
  return {
    ...fallback,
    metaDescription: text(doc.metaDescription, fallback.metaDescription),
    eyebrow: text(doc.eyebrow, fallback.eyebrow),
    title: richField(doc.title, fallback.title),
    lede: text(doc.lede, fallback.lede),
    extraSections: extras(doc.extraSections),
  };
}

export const loadContact = cache(async () => loadIntro("contactPage", contactPage));
export const loadBooking = cache(async () => loadIntro("bookingPage", bookingPage));
export const loadFaqPage = cache(async () => {
  const intro = await loadIntro("faqPage", faqPage);
  if (!(await cmsReady())) return { ...intro, items: faqPage.items };
  const items = await sanityFetch<{ q: string; a: string }[] | null>(
    `*[_type == "faqItem"] | order(order asc){ "q": question, "a": answer }`,
  );
  return { ...intro, items: items?.length ? items : faqPage.items };
});

export const loadPlanning = cache(async () => {
  const base = { ...planningMeeting, topics: planningTopics };
  if (!(await cmsReady())) return base;
  const doc = await sanityFetch<{
    eyebrow?: string;
    title?: string;
    lede?: string;
    points?: string[];
    note?: string;
    topics?: { value: string; label: string }[];
  } | null>(`*[_id == "planningPage"][0]{ eyebrow, title, lede, points, note, topics[]{ value, label } }`);
  if (!doc) return base;
  const topics = doc.topics?.filter((topic) => topic.value && topic.label);
  return {
    eyebrow: text(doc.eyebrow, base.eyebrow),
    title: richField(doc.title, base.title),
    lede: text(doc.lede, base.lede),
    points: lines(doc.points, base.points),
    note: text(doc.note, base.note),
    topics: topics?.length ? topics : base.topics,
  };
});

export function isPlanningTopic(value: string, topics: readonly { value: string }[]): value is PlanningTopic {
  return topics.some((topic) => topic.value === value);
}

export const loadSimpleService = cache(async (href: string) => {
  if (!(await cmsReady())) return null;
  return sanityFetch<ServiceDoc | null>(
    `*[_type == "service" && href == $href && kind == "enkel"][0]{
      title, "slug": slug.current, href, description, lede, paragraphs, points, imageLabel, ctaLabel, ctaHref,
      image{${imageProjection}}, extraSections[]{ heading, text, image{${imageProjection}} }
    }`,
    { href },
  );
});

export async function loadExtraCourseSlugs() {
  if (!(await cmsReady())) return [];
  const courses = await sanityFetch<{ slug: string }[] | null>(`*[_type == "course"]{ "slug": slug.current }`);
  const known = new Set(Object.keys(courseFallbacks));
  return (courses ?? []).map((course) => course.slug).filter((slug) => slug && !known.has(slug));
}
