import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArticle } from '../../store/actions/article-api.actions';
import { Injectable } from '@angular/core';
import { ArticleState } from '../../models/article-state.model';

@Injectable()
export class ArticleResolver implements Resolve<void> {
  constructor(private store: Store<ArticleState>) {
  }

  resolve(): Observable<void> {
    this.store.dispatch(loadArticle());

    return of(null);
  }
}
