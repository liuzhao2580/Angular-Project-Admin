import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout.component'

import { DashboardComponent } from './dashboard/dashboard.component'
import { DocumentComponent } from './document/document.component'
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard'
            },
            {
                path: 'dashboard',
                data: {title:'首页', icon: 'home'},
                component: DashboardComponent
            },
            {
                path: 'document',
                data: {title:'文档', icon: 'exception'},
                component: DocumentComponent
            },
            {
                path: 'article',
                data: {title:'文章', icon: 'profile'},
                loadChildren: ()=> import('./article/article.module').then(m => m.ArticleModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
