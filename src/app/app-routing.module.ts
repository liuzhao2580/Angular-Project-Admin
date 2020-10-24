import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '@/app/login/login.component'
import { LayoutComponent } from './layout/layout.component'
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
