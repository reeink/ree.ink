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
      primary: "rgb(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b))",
      contrast: {
        higher: "rgb(var(--color-contrast-higher-r), var(--color-contrast-higher-g), var(--color-contrast-higher-b))",
        high: "rbg(var(--color-contrast-high-r), var(--color-contrast-high-g), var(--color-contrast-high-b))",
        medium: "rgb(var(--color-contrast-medium-r), var(--color-contrast-medium-g), var(--color-contrast-medium-b))",
        low: "rgb(var(--color-contrast-low-r), var(--color-contrast-low-g), var(--color-contrast-low-b))",
        lower: "rgb(var(--color-contrast-lower-r), var(--color-contrast-lower-g), var(--color-contrast-lower-b))",
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
        sans: ["Inter:400,700", "Noto Sans SC:400,700"],
        serif: ["Noto Serif:400,700", "Noto Serif SC:400,700"],
        mono: ["Fira Code:400,600", "Noto Sans SC:400,700"],
        display: ["Cinzel:400,700", "Noto Serif SC:400,700"],
      },
    }),
  ],
});
