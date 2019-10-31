import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';

@Injectable()
export class ArticlesDataService {
  private readonly baseApiUrl: string = 'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/';
  private readonly articleId: string = 'fa9519d5-0363-4b8d-8e1f-627d802c08a8';
  private readonly fields: Array<keyof Article> = [
    'id',
    'name',
    'elements',
    'lastModified',
  ];

  constructor(private httpClient: HttpClient) {
  }

  fetch(): Observable<Article> {
    return this.httpClient.get<Article>(
      `${this.baseApiUrl}delivery/v1/content/${this.articleId}`,
      { params: { fields: this.fields.join(',') } }
    );
  }
}
