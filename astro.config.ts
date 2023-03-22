import config from "./site.config";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    AstroPWA({
      includeAssets: [],
      registerType: "autoUpdate",
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
        globPatterns: [
          "**/*.{css,js,html,svg,png,ico,jpg,jpeg,webp,txt,woff,woff2}",
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\/404$/],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: true,
    },
  },
});
