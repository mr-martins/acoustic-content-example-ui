import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './store/reducers/article.reducers';
import { ArticlesDataService } from './services/articles-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromArticle.articleFeatureKey, fromArticle.reducer)
  ],
  providers: [
    ArticlesDataService,
  ]
})
export class ArticleModule {
}
