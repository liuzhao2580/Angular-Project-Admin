import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent}from './dashboard/dashboard.component'
import {LayoutComponent} from './layout.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        // component: DashboardComponent
        loadChildren: () => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
