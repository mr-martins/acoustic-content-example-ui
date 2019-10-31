export interface Article {
  id: string;
  name: string;
  elements: ArticleElements;
  lastModified: string;
}

export interface ArticleElements {
  heading: Element<string>;
  author: Element<string>;
  body: Elements<string>;
  mainImage: Element<Image>;
}

export interface Image {
  leadImage: { url: string };
}

export interface Element<T> {
  value: T;
}

export interface Elements<T> {
  values: T[];
}
