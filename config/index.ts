import { z } from "zod";

const base = z.object({
  author: z.string().default("reeink"),
  lang: z.string().default("en"),
  title: z.string().default("Ree's Blog"),
  description: z.string().default("A Simple Blog Powered by Astro"),
  keywords: z.string().default("reeink, blog, Astro, Markdown"),
})

const noComments = z.object({
  type: z.literal("none").default("none"),
});

const giscusComments = z.object({
  type: z.literal("giscus"),
  src: z.string().default("https://giscus.app/client.js"),
  data_repo: z.string().default("reeink/ree.ink"),
  data_repo_id: z.string().default("R_kgDOJG_UwQ"),
  data_category: z.string().default("Comments"),
  data_category_id: z.string().default("DIC_kwDOJG_Uwc4CU8_P"),
  data_mapping: z.string().default("pathname"),
  data_strict: z.string().default("0"),
  data_reactions_enabled: z.string().default("1"),
  data_emit_metadata: z.string().default("0"),
  data_input_position: z.string().default("top"),
  data_theme: z.object({
    auto: z.string().default("preferred_color_scheme"),
    light: z.string().default("light"),
    dark: z.string().default("dark"),
  }),
  data_loading: z.string().default("lazy"),
  crossorigin: z.string().default("anonymous"),
});

const config = z.object({
  base: base.default({}),
  comments: z.union([noComments, giscusComments]).default(noComments.parse({})),
});

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
type Config = z.infer<typeof config>;
type PartialConfig = DeepPartial<Config>;

export function defineConfig(data: PartialConfig): Config {
  return config.parse(data);
}
