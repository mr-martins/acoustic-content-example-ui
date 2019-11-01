import { Action, createReducer, on } from '@ngrx/store';
import * as ArticlePageActions from '../actions/article-page.actions';
import { ArticleState } from '../../models/article-state.model';
import { get } from 'lodash';

export const articleFeatureKey = 'article';

export const initialState: ArticleState = null;

const articleReducer = createReducer(
  initialState,
  on(ArticlePageActions.fetchArticleSucceed, (state, { article }) => ({ article, errorMessage: null })),
  on(ArticlePageActions.fetchArticleFailed, (state, { error }) => {
    const errorMessage = get(error, 'error.errors.message', error.message);

    return { errorMessage, article: null };
  }),
);

export function reducer(state: ArticleState, action: Action) {
  return articleReducer(state, action);
}
