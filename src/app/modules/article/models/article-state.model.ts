import { Article } from './article.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface ArticleState {
  article: Article;
  error: HttpErrorResponse;
}
