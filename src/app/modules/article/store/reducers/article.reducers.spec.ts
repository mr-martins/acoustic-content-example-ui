import * as fromArticle from './article.reducers';
import * as ArticleAPIActions from '../actions/article-page.actions';
import { ArticleState } from '../../models/article-state.model';
import { Article, createArticle } from '../../models/article.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('article reducers', () => {
  it('fetchArticleSucceed should set article data', () => {
    // given
    const article: Article = createArticle({ id: 'id' });

    // when
    const result: ArticleState = fromArticle.reducer(null, ArticleAPIActions.fetchArticleSucceed({ article }));

    // then
    expect(result).toEqual({ article, errorMessage: null });
  });

  it('fetchArticleFailed should set base error message', () => {
    // when
    const result: ArticleState = fromArticle.reducer(null, ArticleAPIActions.fetchArticleFailed({
      error: {
        message: 'message',
      } as HttpErrorResponse
    }));

    // then
    expect(result).toEqual({ article: null, errorMessage: 'message' });
  });

  it('fetchArticleFailed should set response error message', () => {
    // when
    const result: ArticleState = fromArticle.reducer(null, ArticleAPIActions.fetchArticleFailed({
      error: { error: { errors: { message: 'message2' } } } as unknown as HttpErrorResponse
    }));

    // then
    expect(result).toEqual({ article: null, errorMessage: 'message2' });
  });
});
