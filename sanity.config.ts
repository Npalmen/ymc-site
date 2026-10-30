"use client";

import { svSELocale } from "@sanity/locale-sv-se";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || SANITY_DATASET;

export default defineConfig({
  name: "yellow-music",
  title: "Yellow Music",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), svSELocale()],
  schema: { types: schemaTypes },
});
