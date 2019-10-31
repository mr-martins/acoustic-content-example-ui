import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Article } from '../../models/article.model';
import { loadArticle } from '../../store/actions/article-api.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleResolver implements Resolve<void> {
  constructor(private store: Store<Article>) {
  }

  resolve(): Observable<void> {
    this.store.dispatch(loadArticle());

    return of(null);
  }
}
