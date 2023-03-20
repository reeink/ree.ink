import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.coerce.string().optional(),
    description: z.coerce.string().optional(),
    tags: z.array(z.coerce.string().url()).default([]),
    createdTime: z.coerce.date().default(new Date(0)),
    modifiedTime: z.coerce.date().default(new Date(0)),
    publishedTime: z.coerce.date().default(new Date(0)),
    draft: z.coerce.boolean().default(false),
  }),
});

export const collections = {
  posts: postCollection,
};

export type Collection = keyof typeof collections;
