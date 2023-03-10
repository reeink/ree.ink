export interface Base {
  author?: string /* 作者，默认为`reeink` */;

  /* HTML lang attribute，默认为`en`，中文可用`zh-CN`。 */
  /* https://en.wikipedia.org/wiki/IETF_language_tag */
  /* https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes */
  lang?: string;

  title?: string /* 网站标题 */;
  
  description?: string /* 网站描述 */;
}

export interface Fonts {
  google?: {
    fonts: {
      name: string; /* 字体名称 */
      type:
        | "serif"
        | "sans-serif"
        | "monospace"
        | "cursive"
        | "fantasy"
        | "system-ui";  /* 字体类型 */
    }[];
    link: string; /* 全部字体链接，从 https://fonts.google.com/ 获取*/
  };
}

export interface AuthorBadge {
  prefix?: string /* 前缀，默认为`@` */;
  author?: string /* 作者，默认为`${Base.author}` */;
  suffix?: string /* 后缀，默认为`` */;
}

export interface Config {
  // 基础配置
  base: Base;

  // 字体配置
  fonts: Fonts;

  // 作者徽章
  authorBadge: AuthorBadge;
}

// Deep Required
// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
type DeepRequired<T> = {
  [K in keyof T]: Required<DeepRequired<T[K]>>;
};

export type RequiredConfig = DeepRequired<Config>;
