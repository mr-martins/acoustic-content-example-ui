import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {

  ngOnInit() {
  }

}
