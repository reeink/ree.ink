import type * as types from "./index.d";

export const defineConfig = (
  conf: Partial<types.Config>
): types.RequiredConfig => {
  conf.base = {
    ...conf.base,
    ...(<types.Base>{
      author: "reeink",
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
