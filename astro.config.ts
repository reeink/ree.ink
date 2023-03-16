import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  output: "server",
  adapter: cloudflare({
    mode: "directory",
  }),
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: true,
    },
  }
});
