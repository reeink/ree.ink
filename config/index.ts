import { z } from "zod";

const base = z.object({
  author: z.string().default("reeink"),
  lang: z.string().default("en"),
  charset: z.string().default("utf-8"),
  favicon: z.string().default("/favicon.svg"),
  title: z.string().default("Ree's Blog"),
  description: z.string().default("A Simple Blog Powered by Astro"),
  keywords: z.string().default("reeink, blog, Astro, Markdown"),
  copyright: z
    .string()
    .url()
    .default("https://creativecommons.org/licenses/by-nc-sa/4.0/"),
  repo: z.string().url().optional(),
  email: z.string().email().optional(),
});

const config = z.object({
  base: base.default(base.parse({})),
});

const partialConfig = z.object({
  base: base.partial().optional(),
});

type Config = z.infer<typeof config>;
type PartialConfig = z.infer<typeof partialConfig>;
export function defineConfig(data: PartialConfig): Config {
  return config.parse(data);
}
