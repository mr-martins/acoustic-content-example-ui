import { TestBed } from '@angular/core/testing';
import { ArticleResolver } from './article.resolver';
import { Store } from '@ngrx/store';
import { ArticleState } from '../../models/article-state.model';
import { deepEqual, instance, mock, verify } from 'ts-mockito';
import { loadArticle } from '../../store/actions/article-api.actions';

describe('ArticleResolver', () => {
  let resolver: ArticleResolver;
  let mockedStore: Store<ArticleState>;

  beforeEach(() => {
    mockedStore = mock(Store);

    TestBed.configureTestingModule({
      providers: [
        ArticleResolver,
        { provide: Store, useValue: instance(mockedStore) }
      ],
    });

    resolver = TestBed.get(ArticleResolver);
  });

  it('should dispatch loadArticle action on store', () => {
    // when
    resolver.resolve();

    // then
    verify(mockedStore.dispatch(deepEqual(loadArticle()))).once();
  });

  it('should return null observable', (done: DoneFn) => {
    // when
    resolver.resolve().subscribe((result: unknown) => {
      // then
      expect(result).toBeNull();
      done();
    });
  });
});
