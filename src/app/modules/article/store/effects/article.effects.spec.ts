import { ArticlesDataService } from '../../services/articles-data/articles-data.service';
import { instance, mock, verify, when } from 'ts-mockito';
import { TestBed } from '@angular/core/testing';
import { ArticleEffects } from './article.effects';
import { Actions } from '@ngrx/effects';
import { of, ReplaySubject } from 'rxjs';
import { loadArticle } from '../actions/article-api.actions';
import { first } from 'rxjs/operators';

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
      actions$.next(loadArticle());

      // when
      effects.loadArticle$.pipe(first()).subscribe();

      // then
      verify(mockedArticlesDataService.fetch()).once();
      expect().nothing();
    });
  });
});
