import { Action, createReducer, on } from '@ngrx/store';
import * as ArticlePageActions from '../actions/article-page.actions';
import { ArticleState } from '../../models/article-state.model';

export const articleFeatureKey = 'article';

export const initialState: ArticleState = {
  article: null,
  errorMessage: null
};

const articleReducer = createReducer(
  initialState,
  on(ArticlePageActions.fetchArticleSucceed, (state, { article }) => ({ article })),
  on(ArticlePageActions.fetchArticleFailed, (state, { errorMessage }) => ({ article: null, errorMessage })),
);

export function reducer(state: ArticleState, action: Action) {
  return articleReducer(state, action);
}
