import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectArticle } from '../../store/selectors/article.selectors';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { AppState } from '@acc-shared/models/app-state.model';

@Component({
  selector: 'acc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  article$: Observable<Article>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.article$ = this.store.select(selectArticle);
  }
}
