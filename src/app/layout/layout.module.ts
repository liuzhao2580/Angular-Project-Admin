import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'
import { DashboardComponent } from './dashboard/dashboard.component'
@NgModule({
    declarations: [LayoutComponent, DashboardComponent],
    imports: [CommonModule, LayoutRoutingModule, NzLayoutModule, NzIconModule, NzBreadCrumbModule, NzMenuModule]
})
export class LayoutModule {}
