import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetAttributify,
  presetTagify,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--color-primary)",
      contrast: {
        higher: "var(--color-contrast-higher)",
        high: "var(--color-contrast-high)",
        medium: "var(--color-contrast-medium)",
        low: "var(--color-contrast-low)",
        lower: "var(--color-contrast-lower)",
      },
    },
  },
  shortcuts: {
    "flex-center": "flex items-center justify-center",
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        serif: ["Libre Baskerville:400,700", "Noto Serif SC:400,700"],
        mono: ["Fira Code"],
        display: ["Cinzel Decorative"],
      },
    }),
  ],
});
