import { defineConfig } from "./config";

export default defineConfig({
  base: {
    repo: "https://github.com/reeink/ree.ink",
    email: "hi@ree.ink",
  },

  comments: {
    type: "giscus",
    repo: "reeink/ree.ink",
    repoId: "R_kgDOJG_UwQ",
    category: "Comments",
    categoryId: "DIC_kwDOJG_Uwc4CU8_P",
    mapping: "pathname",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "top",
    lang: "en",
    lightTheme: "light",
    darkTheme: "dark",
    loading: "eager",
  }
});
