import { createSelector, select } from '@ngrx/store';
import { ArticleFeatureState, selectArticleFeature } from '../reducers';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ArticleState } from '../../models/article-state.model';
import { AppState } from '@acc-shared/models/app-state.model';

export const selectArticleState = createSelector<AppState, ArticleFeatureState, ArticleState>(selectArticleFeature,
  (state: ArticleFeatureState) => state.article
);

export const selectDefinedArticleState = pipe(
  select(selectArticleState),
  filter(x => !!x)
);
