import { createSelector } from '@ngrx/store';
import { ArticleFeatureState, selectArticleFeature } from '../reducers';

export const selectArticleState = createSelector(selectArticleFeature,
  (state: ArticleFeatureState) => state.article
);
