import { defineConfig } from "./config";

export default defineConfig({
  base: {
    repo: "https://github.com/reeink/ree.ink",
    email: "hi@ree.ink",
  },

  comments: {
    type: "none",
  },

  social: {
    mastodon: {
      instance: "https://mas.to",
      username: "reeink",
    }
  }
});
