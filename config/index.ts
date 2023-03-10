import type * as types from "./index.d";

export const defineConfig = (
  conf: Partial<types.Config>
): types.RequiredConfig => {
  conf.base = {
    ...conf.base,
    ...(<types.Base>{
      author: "reeink",
      lang: "en",
      title: "Reeink's Blog",
      description: "A Simple Blog Powered by Astro",
    }),
  };

  conf.fonts = {
    ...conf.fonts,
    ...(<types.Fonts>{
      google: {
        fonts: [
          { name: "Libre Baskerville", type: "serif" },
          { name: "Noto Serif SC", type: "serif" },
        ],
        link: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Serif+SC:wght@400;700&display=swap",
      },
    }),
  };

  conf.authorBadge = {
    ...conf.authorBadge,
    ...(<types.AuthorBadge>{
      prefix: "@",
      author: conf.base.author,
      suffix: "",
    }),
  };

  return conf as types.RequiredConfig;
};
