import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Frontmatter follows PRD 6.3; coverAlt added because every image needs a descriptive alt.
const portfolio = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(), // empty for concept projects
      concept: z.boolean(),
      category: z.string(),
      year: z.number(),
      cover: image(),
      coverAlt: z.string(),
      url: z.string().url().optional(),
      featured: z.boolean().default(false),
      summary: z.string(),
    }),
});

export const collections = { portfolio };
