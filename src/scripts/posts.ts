import { z } from "astro:content";

export const PostSchema = z.object({
  title: z.coerce.string().optional(),
  description: z.coerce.string().optional(),
  tags: z.array(z.coerce.string().url()).default([]),
  modifiedTime: z.coerce.date().default(new Date(0)),
  publishedTime: z.coerce.date().default(new Date(0)),
  draft: z.coerce.boolean().default(false),
  features: z
    .object({
      comments: z.coerce.boolean().default(true),
      titleAlign: z.enum(["left", "center", "right"]).default("center"),
    })
    .default({
      comments: true,
      titleAlign: "center",
    }),
});

export type PostSchemaType = z.infer<typeof PostSchema>;
