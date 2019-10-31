import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './containers/article/article.component';
import { ArticleResolver } from './services/article-resolver/article.resolver';


const routes: Routes = [
  { path: '', component: ArticleComponent, resolve: { article: ArticleResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
