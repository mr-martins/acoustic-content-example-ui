import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { instance, mock, verify, when } from 'ts-mockito';
import { Store } from '@ngrx/store';
import { AppState } from '@acc-shared/models/app-state.model';
import { selectDefinedArticleState } from '../../store/selectors/article.selectors';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { createArticleState } from '../../models/article-state.model';
import { createArticle } from '../../models/article.model';

describe('ArticleComponent', () => {
  let fixture: ComponentFixture<ArticleComponent>;
  let mockedStore: Store<AppState>;

  beforeEach(async(() => {
    mockedStore = mock(Store);

    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [
        { provide: Store, useValue: instance(mockedStore) }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
  });

  it('should call store on init', () => {
    // given
    when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(null));

    // when
    fixture.detectChanges();

    // then
    verify(mockedStore.pipe(selectDefinedArticleState)).once();
    expect().nothing();
  });

  it('should display content when data is available', () => {
    // given
    when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(createArticleState({
      article: createArticle({
        body: [],
      })
    })));

    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('[test-id="content"]'))).toBeTruthy();
  });

  it('should display error content when error occurred', () => {
    // given
    when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(createArticleState({
      errorMessage: 'error message',
    })));

    // when
    fixture.detectChanges();

    // then
    const errorText: string = fixture.debugElement.query(By.css('.article__error')).nativeElement.innerText;
    expect(errorText).toContain('Cannot load article due to following reason');
    expect(errorText).toContain('error message');
  });

  describe('author paragraph', () => {
    it('should be visible when author and data are available', () => {
      // given
      when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(createArticleState({
        article: createArticle({
          body: [],
          author: 'testA',
          lastModified: '2019-10-10T10:10:10',
        })
      })));

      // when
      fixture.detectChanges();

      // then
      expect(fixture.debugElement.query(By.css('[test-id="author"]'))).toBeTruthy();
    });

    it('should not be visible when author is undefined', () => {
      // given
      when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(createArticleState({
        article: createArticle({
          body: [],
          lastModified: '2019-10-10T10:10:10',
        })
      })));

      // when
      fixture.detectChanges();

      // then
      expect(fixture.debugElement.query(By.css('[test-id="author"]'))).toBeFalsy();
    });

    it('should not be visible when lastModified is undefined', () => {
      // given
      when(mockedStore.pipe(selectDefinedArticleState)).thenReturn(of(createArticleState({
        article: createArticle({
          body: [],
          author: 'author',
        })
      })));

      // when
      fixture.detectChanges();

      // then
      expect(fixture.debugElement.query(By.css('[test-id="author"]'))).toBeFalsy();
    });
  });
});
