import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    start: z.string(),
    end: z.string().optional(),
    thumbNail: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    captions: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    category: z.string().default('project'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
