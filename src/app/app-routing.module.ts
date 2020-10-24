import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '@/app/login/login.component'
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        loadChildren: ()=> import('./layout/layout.module').then(m=>m.LayoutModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
