import { anything, deepEqual, instance, mock, verify, when } from 'ts-mockito';
import { TestBed } from '@angular/core/testing';
import { ArticlesDataService } from './articles-data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Article, createArticle } from '../../models/article.model';

describe('ArticlesDataService', () => {
  let service: ArticlesDataService;
  let mockedHttpClient: HttpClient;

  beforeEach(() => {
    mockedHttpClient = mock(HttpClient);

    TestBed.configureTestingModule({
      providers: [
        ArticlesDataService,
        { provide: HttpClient, useValue: instance(mockedHttpClient) },
      ],
    });

    service = TestBed.get(ArticlesDataService);
  });

  describe('fetch()', () => {
    it('should call get() on httpClient', () => {
      // given
      when(mockedHttpClient.get<object>(anything(), anything())).thenReturn(of(null));
      const expectedUrl = 'https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/' +
        'delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1';
      const expectedFields: string = ['id', 'name', 'elements', 'lastModified'].join(',');

      // when
      service.fetch().subscribe();

      // then
      verify(mockedHttpClient.get<object>(expectedUrl, deepEqual({ params: { fields: expectedFields } }))).once();
      expect().nothing();
    });

    it('should map to full Article object', (done: DoneFn) => {
      // given
      when(mockedHttpClient.get<object>(anything(), anything() as object)).thenReturn(of({
        id: 'Id',
        lastModified: '2019-01-01T11:11:11',
        elements: {
          heading: { value: 'heading' },
          author: { value: 'author' },
          body: { values: ['body'] },
          mainImage: { value: { leadImage: { renditions: { card: { url: '/url' } } } } },
        },
      }));
      const expectedArticle = createArticle({
        id: 'Id',
        lastModified: '2019-01-01T11:11:11',
        heading: 'heading',
        author: 'author',
        body: ['body'],
        imageUrl: 'https://content-eu-4.content-cms.com/url',
      });

      // when
      service.fetch().subscribe((article: Article) => {
        // then
        expect(article).toEqual(expectedArticle);
        done();
      });
    });

    it('should not throw error when object is empty', (done: DoneFn) => {
      // given
      when(mockedHttpClient.get<object>(anything(), anything() as object)).thenReturn(of({}));
      const expectedArticle = createArticle({
        id: undefined,
        lastModified: undefined,
        heading: undefined,
        author: undefined,
        body: [],
        imageUrl: undefined,
      });

      // when
      service.fetch().subscribe((article: Article) => {
        // then
        expect(article).toEqual(expectedArticle);
        done();
      });
    });
  });
});
