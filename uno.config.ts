import {
  defineConfig,
  presetIcons,
  presetMini,
  presetWebFonts,
  presetAttributify,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--color-primary)",
      cont: {
        higher: "var(--color-contrast-higher)",
        high: "var(--color-contrast-high)",
        medium: "var(--color-contrast-medium)",
        low: "var(--color-contrast-low)",
        lower: "var(--color-contrast-lower)",
      },
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetMini(),
    presetAttributify(),
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
      },
    }),
  ],
});
