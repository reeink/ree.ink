export interface Base {
  author?: string /* 作者，默认为`reeink` */;
}

export interface AuthorBadge {
  prefix?: string /* 前缀，默认为`@` */;
  author?: string /* 作者，默认为`${Base.author}` */;
  suffix?: string /* 后缀，默认为`` */;
}

export interface Config {
  // 基础配置
  base: Base;

  // 作者徽章
  authorBadge: AuthorBadge;
}

// Deep Required
// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
type DeepRequired<T> = {
  [K in keyof T]: Required<DeepRequired<T[K]>>;
};

export type RequiredConfig = DeepRequired<Config>;
