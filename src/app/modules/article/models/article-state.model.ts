import { Article } from './article.model';

export function createArticleState(params?: Partial<ArticleState>): ArticleState {
  return { ...params } as ArticleState;
}


export interface ArticleState {
  article: Article;
  errorMessage: string;
}
