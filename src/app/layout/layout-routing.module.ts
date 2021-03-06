import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout.component'

import { DashboardComponent } from './dashboard/dashboard.component'
import { DocumentComponent } from './document/document.component'
import { LayoutAuthGuard } from '@/app/routeAuth/layout-auth.guard'
const routes: Routes = [
    {
        path: '',
        canActivateChild: [LayoutAuthGuard],
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: '首页', icon: 'home',keep:true }
            },
            {
                path: 'document',
                component: DocumentComponent,
                data: { title: '文档', icon: 'exception',keep:true }
            },
            {
                path: 'article',
                data: { title: '文章', icon: 'profile' },
                loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule)
            },
            {
                path: 'multilevel-menu',
                data: { title: '多级菜单', icon: 'menu' },
                loadChildren: () =>
                    import('./multilevel-menu/multilevel-menu.module').then(
                        (m) => m.MultilevelMenuModule
                    )
            },
            {
                path: 'personal',
                data: {title:'个人中心', icon : 'user'},
                loadChildren: ()=> import('./personal/personal.module').then(m => m.PersonalModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
