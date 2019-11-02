import { ArticlesDataService } from '../../services/articles-data/articles-data.service';
import { instance, mock, verify, when } from 'ts-mockito';
import { TestBed } from '@angular/core/testing';
import { ArticleEffects } from './article.effects';
import { Actions } from '@ngrx/effects';
import { of, ReplaySubject, throwError } from 'rxjs';
import * as ArticlePageActions from '../actions/article-api.actions';
import * as ArticleAPIActions from '../actions/article-page.actions';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

describe('ArticleEffects', () => {
  let effects: ArticleEffects;
  let mockedArticlesDataService: ArticlesDataService;
  let actions$: ReplaySubject<any>;

  beforeEach(() => {
    mockedArticlesDataService = mock(ArticlesDataService);
    actions$ = new ReplaySubject(1);

    TestBed.configureTestingModule({
      providers: [
        ArticleEffects,
        { provide: ArticlesDataService, useValue: instance(mockedArticlesDataService) },
        { provide: Actions, useValue: actions$ },
      ],
    });

    effects = TestBed.get(ArticleEffects);
  });

  describe('loadArticle$', () => {
    it('should fetch article from ArticlesDataService', () => {
      // given
      when(mockedArticlesDataService.fetch()).thenReturn(of(null));
      actions$.next(ArticlePageActions.loadArticle());

      // when
      effects.loadArticle$.pipe(first()).subscribe();

      // then
      verify(mockedArticlesDataService.fetch()).once();
      expect().nothing();
    });

    it('should return fetchArticleSucceed action on success', () => {
      // given
      when(mockedArticlesDataService.fetch()).thenReturn(of(null));
      actions$.next(ArticlePageActions.loadArticle());

      // when
      effects.loadArticle$.pipe(first()).subscribe(action => {
        // then
        expect(action).toEqual(ArticleAPIActions.fetchArticleSucceed({ article: null }));
      });
    });

    it('should return fetchArticleFailed action on fail', () => {
      // given
      when(mockedArticlesDataService.fetch()).thenReturn(throwError({}));
      actions$.next(ArticlePageActions.loadArticle());

      // when
      effects.loadArticle$.pipe(first()).subscribe(action => {
        // then
        expect(action).toEqual(ArticleAPIActions.fetchArticleFailed({ error: {} as HttpErrorResponse }));
      });
    });
  });
});
