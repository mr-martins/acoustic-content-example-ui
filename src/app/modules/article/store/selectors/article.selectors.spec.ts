import { selectArticleState, selectDefinedArticleState } from './article.selectors';
import { of } from 'rxjs';
import { ArticleState, createArticleState } from '../../models/article-state.model';
import { createArticle } from '../../models/article.model';

describe('article selectors', () => {
  const articleState = createArticleState({ article: createArticle({ id: 'testID' }) });

  it('selectArticleState should return article state', () => {
    // then
    expect(selectArticleState.projector({ article: articleState })).toEqual(articleState);
  });

  it('selectDefinedArticleState should return defined state only', (done: DoneFn) => {
    // given
    const store = of({ articleFeature: { article: articleState } });

    // when
    store.pipe(selectDefinedArticleState).subscribe((state: ArticleState) => {
      // then
      expect(state).toEqual(articleState);
      done();
    });
  });

  it('selectDefinedArticleState should filter null values', (done: DoneFn) => {
    // given
    const store = of({ articleFeature: { article: null } });
    let subscriptionCalled = false;

    // when
    store.pipe(selectDefinedArticleState).subscribe(() => {
      subscriptionCalled = true;
    });

    // then
    expect(subscriptionCalled).toEqual(false);
    done();
  });
});
