import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@acc-shared/models/app-state.model';
import { ArticleState } from '../../models/article-state.model';
import * as fromArticle from './article.reducers';

export const articleFeatureKey = 'articleFeature';

export interface ArticleFeatureState {
  article: ArticleState;
}

export const selectArticleFeature = createFeatureSelector<AppState, ArticleFeatureState>(articleFeatureKey);

export const reducersMap: ActionReducerMap<ArticleFeatureState> = {
  article: fromArticle.reducer,
};
