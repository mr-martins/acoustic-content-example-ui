import { Article } from './article.model';

export interface ArticleState {
  article: Article;
  errorMessage: string;
}
