import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from '../../models/article-state.model';
import { selectArticleFeature } from '../../store/selectors/article.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'acc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  article$: Observable<ArticleState>;

  constructor(private store: Store<ArticleState>) {
  }

  ngOnInit() {
    this.article$ = this.store.select(selectArticleFeature);
  }

}
