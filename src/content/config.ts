import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string().url()).default([]),
    createdTime: z.date().default(new Date(0)),
    modifiedTime: z.date().default(new Date(0)),
    publishedTime: z.date().default(new Date(0)),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  "posts": postCollection,
};

export type Collection = keyof typeof collections;
