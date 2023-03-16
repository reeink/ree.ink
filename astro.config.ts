import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    AstroPWA({
      workbox: { navigateFallback: "/404" },
      devOptions: {
        enabled: true,
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
