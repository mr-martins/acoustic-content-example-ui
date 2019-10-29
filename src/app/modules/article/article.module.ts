import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './stores/article/article.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromArticle.articleFeatureKey, fromArticle.reducer)
  ]
})
export class ArticleModule {
}
