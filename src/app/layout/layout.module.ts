import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu'

// 导入 service 服务
import { BaseStoreService } from '../store-service/base-store/base-store.service'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DocumentComponent } from './document/document.component'
import { AsideComponent } from './layout-components/aside/aside.component'
import { HeaderComponent } from './layout-components/header/header.component'

@NgModule({
    declarations: [
        LayoutComponent,
        AsideComponent,
        HeaderComponent,
        DashboardComponent,
        DocumentComponent
    ],
    imports: [CommonModule, LayoutRoutingModule, NzLayoutModule, NzIconModule, NzBreadCrumbModule, NzMenuModule],
    providers:[BaseStoreService]
})
export class LayoutModule {
    constructor() {
    }
}
