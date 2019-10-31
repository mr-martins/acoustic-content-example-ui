import { Action, createReducer, on } from '@ngrx/store';
import { Article } from '../../models/article.model';
import * as ArticlePageActions from '../actions/article-page.actions';

export const articleFeatureKey = 'article';

export interface ArticleState {
  article: Article;
  errorMessage: string;
}

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
