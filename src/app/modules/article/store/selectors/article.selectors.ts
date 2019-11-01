import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '@acc-shared/models/app-state.model';
import { ArticleState } from '../../models/article-state.model';
import { articleFeatureKey } from '../reducers/article.reducers';

export const selectArticle = createFeatureSelector<AppState, ArticleState>(articleFeatureKey);
