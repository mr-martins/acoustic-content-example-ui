import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDefinedArticleState } from '../../store/selectors/article.selectors';
import { Observable } from 'rxjs';
import { AppState } from '@acc-shared/models/app-state.model';
import { ArticleState } from '../../models/article-state.model';

@Component({
  selector: 'acc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  articleState$: Observable<ArticleState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.articleState$ = this.store.pipe(selectDefinedArticleState);
  }
}
