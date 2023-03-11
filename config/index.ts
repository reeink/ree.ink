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
      keywords: "reeink, Blog, Astro, Markdown",
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

  conf.nav =
    conf.nav ||
    <Array<types.Page>>[
      { name: "Home", uri: "/" },
      { name: "Archive", uri: "/archive" },
      { name: "Settings", uri: "/settings" },
    ];

  conf.footer =
    conf.footer ||
    <types.Footer>{
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0</a> 2021-${new Date().getFullYear()} © ${conf.base.author}`,
    };

  return conf as types.RequiredConfig;
};
