import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, createArticle } from '../../models/article.model';
import { map } from 'rxjs/operators';
import { get } from 'lodash';

const apiDomain = 'https://my12.digitalexperience.ibm.com';

@Injectable()
export class ArticlesDataService {
  private readonly baseApiUrl: string = `${apiDomain}/api/859f2008-a40a-4b92-afd0-24bb44d10124/`;
  private readonly articleId: string = 'fa9519d5-0363-4b8d-8e1f-627d802c08a8';
  private readonly fields: string[] = [
    'id',
    'name',
    'elements',
    'lastModified',
  ];

  constructor(private httpClient: HttpClient) {
  }

  fetch(): Observable<Article> {
    return this.httpClient.get<object>(
      `${this.baseApiUrl}delivery/v1/content/${this.articleId}`,
      { params: { fields: this.fields.join(',') } }
    ).pipe(
      map((apiResponse: object) => {
        return createArticle({
          id: get(apiResponse, 'id'),
          lastModified: get(apiResponse, 'lastModified'),
          name: get(apiResponse, 'name'),
          heading: get(apiResponse, 'elements.heading.value'),
          author: get(apiResponse, 'elements.author.value'),
          body: get(apiResponse, 'elements.body.values', []),
          imageUrl: apiDomain + get(apiResponse, 'elements.mainImage.value.leadImage.renditions.card.url'),
        });
      })
    );
  }
}
