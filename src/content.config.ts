import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Files starting with "_" (like _TEMPLATE.md) are ignored.
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      award: z.string(),
      issuer: z.string(),
      date: z.string(), // "YYYY-MM"
      category: z.enum(['coastal', 'health', 'digital', 'structures', 'academic']),
      featured: z.boolean().default(false),
      summary: z.string(),
      cover: image().optional(),
      team: z.array(z.string()).default([]),
      sdgs: z.array(z.number()).default([]),
      kpis: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      media: z
        .array(
          z.object({
            type: z.enum(['video', 'slides', 'pdf', 'image']),
            title: z.string(),
            src: z.string(), // YouTube/Drive link, or /media/<slug>/file.pdf
          }),
        )
        .default([]),
    }),
});

const moments = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/moments' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      place: z.string().optional(),
      photo: image().optional(),
    }),
});

export const collections = { projects, moments };
