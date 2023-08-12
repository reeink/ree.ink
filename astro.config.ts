import config from "./site.config";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AstroPWA from "@vite-pwa/astro";
import UnoCSS from "@unocss/astro";
import vue from '@astrojs/vue';
import Compress from "astro-compress";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import * as child from "child_process";

const commitHash = child.execSync("git rev-parse HEAD").toString().trim();

// https://astro.build/config
export default defineConfig({
  site: "https://ree.ink",
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
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        navigateFallbackAllowlist: [/^\/404$/],
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
    UnoCSS({
      injectReset: true
    }),
    vue(),
    Compress(),
    sitemap(),
    robotsTxt({
      host: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: true,
    },
  },
  vite: {
    define: {
      __COMMIT_HASH__: JSON.stringify(commitHash),
    }
  }
});
