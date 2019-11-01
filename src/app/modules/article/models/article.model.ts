export function createArticle(params?: Partial<Article>): Article {
  return { ...params } as Article;
}

export interface Article {
  id: string;
  name: string;
  lastModified: string;
  imageUrl: string;
  author: string;
  body: string[];
  heading: string;
}
