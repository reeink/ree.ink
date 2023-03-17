import config from "./site.config";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    AstroPWA({
      mode: "development",
      base: "/",
      scope: "/",
      includeAssets: [],
      manifest: {
        name: config.base.title,
        short_name: config.base.title,
        description: config.base.description,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "apple-touch-icon-152x152-precomposed.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "safari-pinned-tab.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
          {
            src: "mstile-150x150.png",
            sizes: "150x150",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/404$/],
      },
    }),
  ],
  output: "server",
  adapter: cloudflare({
    mode: "directory",
  }),
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: true,
    },
  },
});
