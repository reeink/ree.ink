import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string().url()).default([]),
    createdTime: z.string().datetime().default(new Date(0).toISOString()).transform((v) => new Date(v)),
    modifiedTime: z.string().datetime().default(new Date(0).toISOString()).transform((v) => new Date(v)),
    publishedTime: z.string().datetime().default(new Date(0).toISOString()).transform((v) => new Date(v)),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  "posts": postCollection,
};

export type Collection = keyof typeof collections;
