import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every Markdown file in src/content/blog becomes a page at /blog/<filename>.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

// Every Markdown file in src/content/notes becomes a page at /book-notes/<filename>.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    book: z.string(),
    author: z.string(),
    related: z.object({ text: z.string(), url: z.string().url() }).optional(),
  }),
});

export const collections = { blog, notes };
