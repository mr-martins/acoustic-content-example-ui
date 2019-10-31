import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/article.model';

export const fetchArticleSucceed = createAction(
  '[Article API] Fetch Succeed',
  props<{ article: Article }>()
);

export const fetchArticleFailed = createAction(
  '[Article API] Fetch Failed',
  props<{ errorMessage: string }>()
);
