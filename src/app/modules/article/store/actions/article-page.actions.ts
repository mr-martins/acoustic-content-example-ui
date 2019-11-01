import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/article.model';
import { HttpErrorResponse } from '@angular/common/http';

export const fetchArticleSucceed = createAction(
  '[Article API] Fetch Succeed',
  props<{ article: Article }>()
);

export const fetchArticleFailed = createAction(
  '[Article API] Fetch Failed',
  props<{ error: HttpErrorResponse }>()
);
