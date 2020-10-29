import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleCreateComponent } from './article-create/article-create.component'
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch:'full',
                redirectTo: '/article/list'
            },
            {
                path: 'list',
                data: {title: '文章列表', icon:'unordered-list'},
                component: ArticleListComponent
            },
            {
                path: 'create',
                data: {title: '文章创建', icon:'file-add'},
                component: ArticleCreateComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule {}
