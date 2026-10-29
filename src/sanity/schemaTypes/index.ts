import { defineArrayMember, defineField, defineType } from "sanity";

const marked =
  "Sätt *asterisker* runt ordet som ska vara gult och kursivt. Exempel: Låt oss växa *tillsammans*.";

function titleField(name = "title", title = "Rubrik") {
  return defineField({
    name,
    title,
    type: "string",
    description: marked,
  });
}

function imageField(name = "image", title = "Bild") {
  return defineField({
    name,
    title,
    type: "image",
    description: "Ladda upp en bild. Dra i beskärningen så att det viktiga hamnar i fokus.",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Bildtext för den som inte ser bilden",
        type: "string",
        validation: (rule) => rule.required().error("Skriv vad bilden föreställer."),
      }),
    ],
  });
}

const extraSection = defineArrayMember({
  type: "object",
  name: "extraSection",
  title: "Avsnitt",
  fields: [
    defineField({
      name: "heading",
      title: "Rubrik",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "text", title: "Text", type: "text", rows: 4 }),
    imageField(),
  ],
  preview: { select: { title: "heading", media: "image" } },
});

function extraSectionsField() {
  return defineField({
    name: "extraSections",
    title: "Egna avsnitt",
    description: "Lägg till, ändra eller ta bort avsnitt under sidans fasta innehåll.",
    type: "array",
    of: [extraSection],
  });
}

const linkFields = [
  defineField({ name: "label", title: "Text", type: "string", validation: (rule) => rule.required() }),
  defineField({
    name: "href",
    title: "Adress",
    type: "string",
    description: "Börjar med / för en sida på webbplatsen, eller https:// för en extern länk.",
    validation: (rule) => rule.required().regex(/^(\/|https:\/\/)/, { name: "adress" }),
  }),
];

export const schemaTypes = [
  defineType({
    name: "siteSettings",
    title: "Webbplats",
    type: "document",
    fields: [
      defineField({ name: "name", title: "Namn", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "legalName", title: "Juridiskt namn", type: "string" }),
      defineField({ name: "shortName", title: "Kort namn", type: "string" }),
      defineField({ name: "description", title: "Kort beskrivning", type: "text", rows: 3 }),
      defineField({ name: "email", title: "E-post", type: "string", validation: (rule) => rule.email() }),
      defineField({ name: "phone", title: "Telefon", type: "string" }),
      defineField({ name: "bookingLabel", title: "Text på Boka-knappen", type: "string", initialValue: "Boka nu" }),
      defineField({ name: "trustpilot", title: "Trustpilot-länk", type: "url" }),
      defineField({ name: "postalStreet", title: "Postadress, gata", type: "string" }),
      defineField({ name: "postalCode", title: "Postnummer", type: "string" }),
      defineField({ name: "postalCity", title: "Ort", type: "string" }),
      defineField({ name: "studioName", title: "Studions namn", type: "string" }),
      defineField({ name: "studioStreet", title: "Studions gata", type: "string" }),
      defineField({ name: "studioArea", title: "Studions område", type: "string" }),
      defineField({ name: "studioCity", title: "Studions ort", type: "string" }),
      defineField({ name: "studioNote", title: "Notering om studion", type: "text", rows: 2 }),
      defineField({
        name: "menuLinks",
        title: "Länkar bredvid Tjänster",
        description: "Community, Om oss, Kontakt och FAQ. Du kan döpa om, gömma eller lägga till en länk.",
        type: "array",
          of: [defineArrayMember({ type: "object", name: "menuLink", fields: linkFields, preview: { select: { title: "label", subtitle: "href" } } })],
      }),
    ],
    preview: { prepare: () => ({ title: "Webbplats och kontakt" }) },
  }),
  defineType({
    name: "service",
    title: "Tjänst i menyn",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Namn i menyn", type: "string", validation: (rule) => rule.required() }),
      defineField({
        name: "slug",
        title: "Kortnamn",
        type: "slug",
        options: { source: "title" },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "href",
        title: "Adress",
        type: "string",
        description: "Till exempel /tjanster/sanglektioner",
        validation: (rule) => rule.required().regex(/^\//),
      }),
      defineField({ name: "description", title: "Kort rad under namnet", type: "text", rows: 2 }),
      defineField({
        name: "group",
        title: "Grupp",
        type: "string",
        options: {
          list: [
            { title: "Sånglektioner", value: "sanglektioner" },
            { title: "Utbildning", value: "utbildning" },
            { title: "Distribution", value: "distribution" },
          ],
        },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "parentSlug",
        title: "Ligger under",
        type: "string",
        description: "Lämna tom om det här är en huvudtjänst. Annars kortnamnet på föräldern, till exempel sanglektioner.",
      }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
      defineField({ name: "showInMenu", title: "Visa i menyn", type: "boolean", initialValue: true }),
      defineField({
        name: "kind",
        title: "Sidtyp",
        type: "string",
        options: {
          list: [
            { title: "Färdig sida (redigeras under sin egen rubrik)", value: "meny" },
            { title: "Egen enkel sida", value: "enkel" },
          ],
        },
        initialValue: "meny",
      }),
      defineField({ name: "lede", title: "Ingress, bara för egen sida", type: "text", rows: 3 }),
      defineField({
        name: "paragraphs",
        title: "Stycken, bara för egen sida",
        type: "array",
        of: [defineArrayMember({ type: "text" })],
      }),
      defineField({
        name: "points",
        title: "Punkter, bara för egen sida",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      imageField(),
      defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
      defineField({ name: "ctaLabel", title: "Knapptext", type: "string" }),
      defineField({ name: "ctaHref", title: "Knappens adress", type: "string" }),
      extraSectionsField(),
    ],
    orderings: [{ title: "Ordning", name: "order", by: [{ field: "order", direction: "asc" }] }],
    preview: { select: { title: "title", subtitle: "href" } },
  }),
  defineType({
    name: "lessonPackage",
    title: "Lektionspaket",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Namn", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "slug", title: "Kortnamn", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
      defineField({ name: "summary", title: "Beskrivning", type: "text", rows: 3, validation: (rule) => rule.required() }),
      defineField({
        name: "price",
        title: "Pris",
        type: "string",
        description: "Till exempel 2 400 kr eller Kostnadsfri. Lämna tomt om priset inte är satt.",
      }),
      defineField({
        name: "priceMissing",
        title: "Priset är inte satt ännu",
        type: "boolean",
        initialValue: false,
      }),
      defineField({ name: "note", title: "Rad under priset", type: "string" }),
      defineField({
        name: "points",
        title: "Det här ingår",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      defineField({ name: "cta", title: "Knapptext", type: "string", initialValue: "Boka nu" }),
      defineField({ name: "href", title: "Knappens adress", type: "string" }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
    ],
    preview: { select: { title: "title", subtitle: "price" } },
  }),
  defineType({
    name: "review",
    title: "Recension",
    type: "document",
    fields: [
      defineField({
        name: "quote",
        title: "Omdöme",
        type: "text",
        rows: 4,
        validation: (rule) => rule.required().min(10),
      }),
      defineField({ name: "name", title: "Namn", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "role", title: "Roll eller källa", type: "string" }),
      defineField({
        name: "rating",
        title: "Betyg",
        type: "number",
        description: "1 till 5. Lämna tomt om betyget inte ska visas.",
        validation: (rule) => rule.min(1).max(5),
      }),
      defineField({
        name: "placeholder",
        title: "Det här är en platshållare, inte ett riktigt omdöme",
        type: "boolean",
        initialValue: true,
      }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
    ],
    preview: { select: { title: "name", subtitle: "quote" } },
  }),
  defineType({
    name: "faqItem",
    title: "Fråga",
    type: "document",
    fields: [
      defineField({ name: "question", title: "Fråga", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "answer", title: "Svar", type: "text", rows: 5, validation: (rule) => rule.required() }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
    ],
    preview: { select: { title: "question" } },
  }),
  defineType({
    name: "timelineEntry",
    title: "Tidslinje",
    type: "document",
    fields: [
      defineField({ name: "year", title: "År eller period", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "tag", title: "Liten etikett", type: "string" }),
      defineField({ name: "title", title: "Rubrik", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "body", title: "Text", type: "text", rows: 4, validation: (rule) => rule.required() }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
    ],
    preview: { select: { title: "title", subtitle: "year" } },
  }),
  defineType({
    name: "principle",
    title: "Princip",
    type: "document",
    fields: [
      defineField({ name: "number", title: "Nummer", type: "string", description: "Till exempel 01", validation: (rule) => rule.required() }),
      defineField({ name: "title", title: "Namn", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "body", title: "Text", type: "text", rows: 3, validation: (rule) => rule.required() }),
      defineField({ name: "order", title: "Ordning", type: "number", initialValue: 0 }),
    ],
    preview: { select: { title: "title", subtitle: "number" } },
  }),
  defineType({
    name: "course",
    title: "Kurs",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Namn", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "slug", title: "Adressnamn", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Liten etikett", type: "string" }),
      titleField("heading", "Rubrik"),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
      imageField(),
      defineField({
        name: "sections",
        title: "Textavsnitt",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "courseSection",
            fields: [
              defineField({ name: "heading", title: "Rubrik", type: "string" }),
              defineField({ name: "paragraphs", title: "Stycken", type: "array", of: [defineArrayMember({ type: "text" })] }),
            ],
          }),
        ],
      }),
      defineField({ name: "points", title: "Punkter", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "missing", title: "Vad som saknas, till exempel pris", type: "text", rows: 2 }),
      defineField({ name: "ctaLabel", title: "Knapptext", type: "string" }),
      defineField({ name: "ctaHref", title: "Knappens adress", type: "string" }),
      defineField({ name: "topic", title: "Ämne i formuläret", type: "string" }),
      defineField({ name: "order", title: "Ordning", type: "number" }),
      extraSectionsField(),
    ],
    preview: { select: { title: "title" } },
  }),
  defineType({
    name: "homePage",
    title: "Startsida",
    type: "document",
    fields: [
      defineField({
        name: "hero",
        title: "Överst",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Liten etikett", type: "string" }),
          titleField(),
          defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
          defineField({ name: "primaryLabel", title: "Knapp 1", type: "string" }),
          defineField({ name: "primaryHref", title: "Knapp 1, adress", type: "string" }),
          defineField({ name: "secondaryLabel", title: "Knapp 2", type: "string" }),
          defineField({ name: "secondaryHref", title: "Knapp 2, adress", type: "string" }),
          defineField({ name: "meta", title: "Små rader under knapparna", type: "array", of: [defineArrayMember({ type: "string" })] }),
          defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
          defineField({ name: "imageCaption", title: "Bildtext", type: "string" }),
          imageField(),
        ],
      }),
      defineField({
        name: "paths",
        title: "Vägar in",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "homePath",
            fields: [
              defineField({ name: "n", title: "Nummer", type: "string" }),
              defineField({ name: "title", title: "Namn", type: "string" }),
              defineField({ name: "note", title: "Rad under", type: "string" }),
              defineField({ name: "href", title: "Adress", type: "string" }),
            ],
          }),
        ],
      }),
      defineField({ name: "communityLabel", title: "Länk till community", type: "string" }),
      defineField({ name: "communityHref", title: "Community-adress", type: "string" }),
      defineField({
        name: "soul",
        title: "Bra för själen",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Liten etikett", type: "string" }),
          defineField({ name: "title", title: "Rubrik", type: "string" }),
          defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
          defineField({ name: "points", title: "Punkter", type: "array", of: [defineArrayMember({ type: "string" })] }),
          defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
          imageField(),
          defineField({ name: "darkLabel", title: "Etikett i det mörka fältet", type: "string" }),
          defineField({ name: "darkTitle", title: "Rubrik i det mörka fältet", type: "string" }),
          defineField({ name: "darkBody", title: "Text i det mörka fältet", type: "text", rows: 3 }),
          defineField({ name: "darkCtaLabel", title: "Knapp", type: "string" }),
          defineField({ name: "darkCtaHref", title: "Knappens adress", type: "string" }),
        ],
      }),
      defineField({
        name: "reviews",
        title: "Omdömen, rubrik",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
          titleField(),
          defineField({ name: "note", title: "Förklaring", type: "text", rows: 3 }),
        ],
      }),
      defineField({
        name: "founder",
        title: "Kort om Biim",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
          titleField(),
          defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
          defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
          defineField({ name: "ctaLabel", title: "Knapp", type: "string" }),
          defineField({ name: "ctaHref", title: "Knappens adress", type: "string" }),
          imageField(),
        ],
      }),
      defineField({
        name: "close",
        title: "Avslut",
        type: "object",
        fields: [titleField(), defineField({ name: "body", title: "Text", type: "text", rows: 3 })],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Startsida" }) },
  }),
  defineType({
    name: "singingPage",
    title: "Sånglektioner",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
      imageField(),
      defineField({
        name: "difference",
        title: "Så arbetar vi annorlunda",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
          titleField(),
          defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
          defineField({ name: "oursName", title: "Vår kolumn, namn", type: "string" }),
          defineField({ name: "oursSub", title: "Vår kolumn, underrad", type: "string" }),
          defineField({ name: "otherName", title: "Andra kolumnen, namn", type: "string" }),
          defineField({ name: "otherSub", title: "Andra kolumnen, underrad", type: "string" }),
          defineField({
            name: "rows",
            title: "Rader",
            type: "array",
            of: [
              defineArrayMember({
                type: "object",
                name: "differenceRow",
                fields: [
                  defineField({ name: "label", title: "Radens namn", type: "string" }),
                  defineField({ name: "ours", title: "Hos oss", type: "text", rows: 2 }),
                  defineField({ name: "other", title: "Inte vår modell", type: "text", rows: 2 }),
                ],
              }),
            ],
          }),
        ],
      }),
      defineField({
        name: "also",
        title: "Också inom sången",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "namedText",
            fields: [
              defineField({ name: "title", title: "Namn", type: "string" }),
              defineField({ name: "body", title: "Text", type: "text", rows: 2 }),
            ],
          }),
        ],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Sånglektioner" }) },
  }),
  defineType({
    name: "stepsPage",
    title: "Steg för steg",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
      defineField({
        name: "steps",
        title: "Steg",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "step",
            fields: [
              defineField({ name: "n", title: "Nummer", type: "string" }),
              defineField({ name: "title", title: "Rubrik", type: "string" }),
              defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Steg för steg" }) },
  }),
  defineType({
    name: "packagesPage",
    title: "Lektionspaket, inledning",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "priceNotice", title: "Notis om priser", type: "text", rows: 3 }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Lektionspaket" }) },
  }),
  defineType({
    name: "educationPage",
    title: "Utbildning",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "praktik", title: "Text om praktik", type: "text", rows: 3 }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Utbildning" }) },
  }),
  defineType({
    name: "distributionPage",
    title: "Distribution",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
      imageField(),
      defineField({
        name: "blocks",
        title: "Avsnitt",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "distributionBlock",
            fields: [
              defineField({ name: "id", title: "Ankare", type: "string", description: "Till exempel podcast. Utan mellanslag." }),
              defineField({ name: "title", title: "Rubrik", type: "string" }),
              defineField({ name: "paragraphs", title: "Stycken", type: "array", of: [defineArrayMember({ type: "text" })] }),
            ],
          }),
        ],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Distribution" }) },
  }),
  defineType({
    name: "communityPage",
    title: "Community",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
      imageField(),
      defineField({ name: "paragraphs", title: "Stycken", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({
        name: "points",
        title: "Kort",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "cardText",
            fields: [
              defineField({ name: "title", title: "Rubrik", type: "string" }),
              defineField({ name: "body", title: "Text", type: "text", rows: 2 }),
            ],
          }),
        ],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Community" }) },
  }),
  defineType({
    name: "aboutPage",
    title: "Om oss",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "paragraphs", title: "Berättelse", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({ name: "quote", title: "Citat", type: "text", rows: 3 }),
      defineField({ name: "voice", title: "Rösten, stycken", type: "array", of: [defineArrayMember({ type: "text" })] }),
      defineField({ name: "imageLabel", title: "Text om porträttet saknas", type: "string" }),
      imageField("portrait", "Porträtt"),
      defineField({ name: "timelineTitle", title: "Rubrik över tidslinjen", type: "string" }),
      defineField({
        name: "principles",
        title: "Principkortet",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
          titleField(),
        ],
      }),
      defineField({ name: "valuesLine", title: "Rad under principerna", type: "string" }),
      defineField({
        name: "studio",
        title: "Starlight",
        type: "object",
        fields: [
          defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
          defineField({ name: "title", title: "Rubrik", type: "string" }),
          defineField({ name: "paragraphs", title: "Stycken", type: "array", of: [defineArrayMember({ type: "text" })] }),
          defineField({ name: "imageLabel", title: "Text om bilden saknas", type: "string" }),
          imageField(),
        ],
      }),
      defineField({
        name: "partners",
        title: "Samarbeten",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "partner",
            fields: [
              defineField({ name: "name", title: "Namn", type: "string" }),
              defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Om oss" }) },
  }),
  defineType({
    name: "contactPage",
    title: "Kontakt",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Kontakt" }) },
  }),
  defineType({
    name: "bookingPage",
    title: "Boka",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "Boka" }) },
  }),
  defineType({
    name: "faqPage",
    title: "FAQ, inledning",
    type: "document",
    fields: [
      defineField({ name: "metaDescription", title: "Beskrivning för sökmotorer", type: "text", rows: 2 }),
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 3 }),
      extraSectionsField(),
    ],
    preview: { prepare: () => ({ title: "FAQ" }) },
  }),
  defineType({
    name: "planningPage",
    title: "Planeringsmöte",
    type: "document",
    fields: [
      defineField({ name: "eyebrow", title: "Etikett", type: "string" }),
      titleField(),
      defineField({ name: "lede", title: "Ingress", type: "text", rows: 4 }),
      defineField({ name: "points", title: "Punkter", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "note", title: "Text under knappen", type: "text", rows: 2 }),
      defineField({
        name: "topics",
        title: "Ämnen i listan",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "topic",
            fields: [
              defineField({ name: "value", title: "Värde", type: "string", validation: (rule) => rule.required() }),
              defineField({ name: "label", title: "Text", type: "string", validation: (rule) => rule.required() }),
            ],
          }),
        ],
      }),
    ],
    preview: { prepare: () => ({ title: "Planeringsmöte" }) },
  }),
];
