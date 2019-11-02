import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArticleFeature from './store/reducers';
import { ArticlesDataService } from './services/articles-data/articles-data.service';
import { ArticleComponent } from './containers/article/article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleResolver } from './services/article-resolver/article.resolver';
import { ArticleEffects } from './store/effects/article.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromArticleFeature.articleFeatureKey, fromArticleFeature.reducersMap),
    EffectsModule.forFeature([ArticleEffects])
  ],
  providers: [
    ArticlesDataService,
    ArticleResolver,
    ArticleEffects,
  ]
})
export class ArticleModule {
}
