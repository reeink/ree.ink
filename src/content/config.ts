import { defineCollection } from "astro:content";
import { PostSchema } from "@/scripts/posts";

const postCollection = defineCollection({
  schema: PostSchema,
});

export const collections = {
  posts: postCollection,
};

export type Collection = keyof typeof collections;
