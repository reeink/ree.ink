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
      name: string /* 字体名称 */;
      type:
        | "serif"
        | "sans-serif"
        | "monospace"
        | "cursive"
        | "fantasy"
        | "system-ui" /* 字体类型 */;
    }[];
    link: string /* 全部字体链接，从 https://fonts.google.com/ 获取*/;
  };
}

export interface Page {
  name: string /* 页面名称 */;
  uri: string /* 页面路径 */;
}

export interface Footer {
  copyright: string /* 版权信息，支持HTML */;
}

export interface Config {
  // 基础配置
  base: Base;

  // 字体配置
  fonts: Fonts;

  // 导航页配置
  nav: Page[];

  // 页脚配置
  footer: Footer;
}

// Deep Required
// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
type DeepRequired<T> = {
  [K in keyof T]: Required<DeepRequired<T[K]>>;
};

export type RequiredConfig = DeepRequired<Config>;
