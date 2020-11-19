import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '@/app/login/login.component'
import { Error404Component } from './error404/error404.component'
import { LayoutAuthGuard } from '@/app/routeAuth/layout-auth.guard'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [LayoutAuthGuard],
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '**',
        redirectTo: '/404'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
