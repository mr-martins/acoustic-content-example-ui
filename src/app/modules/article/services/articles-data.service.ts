import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesDataService {
  constructor(private httpClient: HttpClient) {
  }
}
