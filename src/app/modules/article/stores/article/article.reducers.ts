import { Action, createReducer } from '@ngrx/store';
import { Article } from '../../models/article.model';

export const articleFeatureKey = 'article';

export const initialState: Article = {} as Article;

export function reducer(state: Article | undefined, action: Action) {
  return createReducer(
    initialState,
  );
}
