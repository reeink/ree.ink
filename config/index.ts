import { z, ZodSchema } from "zod";
import type {
  BooleanString as GiscusBooleanString,
  InputPosition as GiscusInputPosition,
  Repo as GiscusRepo,
  Mapping as GiscusMapping,
  Theme as GiscusTheme,
  AvailableLanguage as GiscusAvailableLanguage,
  Loading as GiscusLoading,
} from "@giscus/vue";

const base = z.object({
  author: z.string().default("reeink"),
  lang: z.string().default("en"),
  charset: z.string().default("utf-8"),
  favicon: z.string().default("/favicon.svg"),
  title: z.string().default("Ree"),
  description: z.string().default("A Simple Blog Powered by Astro"),
  keywords: z.string().default("reeink, blog, Astro, Markdown"),
})

const noComments = z.object({
  type: z.enum(["none"]).default("none"),
})

const giscusBooleanStringSchema: ZodSchema<GiscusBooleanString> = z.enum(["0", "1"]) as ZodSchema<GiscusBooleanString>;
const giscusInputPositionSchema: ZodSchema<GiscusInputPosition> = z.enum(["top", "bottom"]) as ZodSchema<GiscusInputPosition>;
const giscusRepoSchema: ZodSchema<GiscusRepo> = z.string().refine(value => /^.+\/.+$/.test(value), {
  message: "Invalid repo format. Expected '{owner}/{name}'.",
}) as ZodSchema<GiscusRepo>;
const giscusMappingSchema: ZodSchema<GiscusMapping> = z.enum(["url", "title", "og:title", "specific", "number", "pathname"]) as ZodSchema<GiscusMapping>;
const giscusThemeSchema: ZodSchema<GiscusTheme> = z.enum(["light", "light_high_contrast", "light_protanopia", "light_tritanopia", "dark", "dark_high_contrast", "dark_protanopia", "dark_tritanopia", "dark_dimmed", "preferred_color_scheme", "transparent_dark", "noborder_light", "noborder_dark", "cobalt", "https://${string}"]) as ZodSchema<GiscusTheme>;
const giscusAvailableLanguageSchema: ZodSchema<GiscusAvailableLanguage> = z.enum(["ar", "ca", "de", "en", "es", "fa", "fr", "he", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "th", "tr", "vi", "uk", "zh-CN", "zh-TW"]) as ZodSchema<GiscusAvailableLanguage>;
const giscusLoadingSchema: ZodSchema<GiscusLoading> = z.enum(["lazy", "eager"]) as ZodSchema<GiscusLoading>;

const giscusComments = z.object({
  type: z.enum(["giscus"]).default("giscus"),
  id: z.string().optional(),
  host: z.string().optional(),
  repo: giscusRepoSchema,
  repoId: z.string(),
  category: z.string().optional(),
  categoryId: z.string().optional(),
  mapping: giscusMappingSchema,
  term: z.string().optional(),
  lightTheme: giscusThemeSchema.optional(),
  darkTheme: giscusThemeSchema.optional(),
  strict: giscusBooleanStringSchema.optional(),
  reactionsEnabled: giscusBooleanStringSchema.optional(),
  emitMetadata: giscusBooleanStringSchema.optional(),
  inputPosition: giscusInputPositionSchema.optional(),
  lang: giscusAvailableLanguageSchema.optional(),
  loading: giscusLoadingSchema.optional(),
})

const config = z.object({
  base: base.default(base.parse({})),
  comments: z.union([noComments, giscusComments]).default(noComments.parse({}))
});
const partialConfig = z.object({
  base: base.partial().optional(),
  comments: z.union([noComments, giscusComments]).optional(),
});

type Config = z.infer<typeof config>;
type PartialConfig = z.infer<typeof partialConfig>;
export function defineConfig(data: PartialConfig): Config {
  return config.parse(data);
}
