import { createSelector, select } from '@ngrx/store';
import { ArticleFeatureState, selectArticleFeature } from '../reducers';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

export const selectArticleState = createSelector(selectArticleFeature,
  (state: ArticleFeatureState) => state.article
);

export const selectDefinedArticleState = pipe(
  select(selectArticleState),
  filter(x => !!x)
);
