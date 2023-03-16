import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string().url()).optional(),
    createdTime: z.date().optional(),
    lastModifiedTime: z.date().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  "posts": postCollection,
};

export type Collection = keyof typeof collections;
