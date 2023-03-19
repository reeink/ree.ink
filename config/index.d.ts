export interface Base {
  author?: string /* 作者，默认为`reeink` */;

  /* HTML lang attribute，默认为`en`，中文可用`zh-CN`。 */
  /* https://en.wikipedia.org/wiki/IETF_language_tag */
  /* https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes */
  lang?: string;

  title?: string /* 网站标题 */;

  description?: string /* 网站描述 */;

  keywords?: string /* 网站关键词 */;

  theme?: string /* 网站默认色彩主题，默认为`auto`，即随系统主题变化 */;

  brand?: {
    type: "text" | "svg" /* 网站品牌类型，支持文本和SVG */;
    text?: string /* 网站品牌文本，支持HTML */;
    svg?: string /* 网站品牌svg链接 */;
  }
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

export type NoneComments = {
  type: "none";
}

export interface GiscusComments {
  type: "giscus";
  src: string;
  data_repo: string;
  data_repo_id: string;
  data_category: string;
  data_category_id: string;
  data_mapping: string;
  data_strict: string;
  data_reactions_enabled: string;
  data_emit_metadata: string;
  data_input_position: string;
  data_theme: string;
  data_loading: string;
  crossorigin: string;
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

  // 评论配置
  comments: NoneComments | GiscusComments;

  // 页脚配置
  footer: Footer;
}

// Deep Required
// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
type DeepRequired<T> = {
  [K in keyof T]: Required<DeepRequired<T[K]>>;
};

export type RequiredConfig = DeepRequired<Config>;
