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
                component: DashboardComponent
            },
            {
                path: 'document',
                component: DocumentComponent
            },
            {
                path: 'article',
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
