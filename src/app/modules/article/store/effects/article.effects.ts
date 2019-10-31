import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticlesDataService } from '../../services/articles-data/articles-data.service';
import * as ArticlePageActions from '../actions/article-api.actions';
import * as ArticleAPIActions from '../actions/article-page.actions';
import { of } from 'rxjs';
import { Article } from '../../models/article.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articlesDataService: ArticlesDataService) {
  }

  loadArticle$ = createEffect(() => this.actions$.pipe(
    ofType(ArticlePageActions.loadArticle),
    switchMap(() => this.articlesDataService.fetch()
      .pipe(
        map((article: Article) => ArticleAPIActions.fetchArticleSucceed({ article })),
        catchError((error: HttpErrorResponse) => of(ArticleAPIActions.fetchArticleFailed({ errorMessage: error.message })))
      ))
    )
  );
}
