import { articleFeatureKey, ArticleFeatureState } from '../../modules/article/store/reducers';

export interface AppState {
  [articleFeatureKey]: ArticleFeatureState;
}
