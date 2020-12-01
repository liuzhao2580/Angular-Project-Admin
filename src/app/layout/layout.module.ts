import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// 导入 antd 组件
import { getModule } from './import-ng-zorro-antd'

// 导入 service 服务
import { BaseStoreService } from '../store-service/base-store/base-store.service'

import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DocumentComponent } from './document/document.component'
import { AsideComponent } from './layout-components/aside/aside.component'
import { HeaderComponent } from './layout-components/header/header.component'
import { BreadcrumbComponent } from './layout-components/header/components/breadcrumb/breadcrumb.component'
import { PersonalComponent } from './layout-components/header/components/personal/personal.component'
import { SubmenuComponent } from './layout-components/aside/components/submenu/submenu.component';
import { ChildAComponent } from './dashboard/child-a/child-a.component';
import { ChildBComponent } from './dashboard/child-b/child-b.component'

@NgModule({
    declarations: [
        LayoutComponent,
        AsideComponent,
        HeaderComponent,
        BreadcrumbComponent,
        PersonalComponent,
        DashboardComponent,
        DocumentComponent,
        SubmenuComponent,
        ChildAComponent,
        ChildBComponent
    ],
    imports: [CommonModule, LayoutRoutingModule, ...getModule],
    providers: [
        BaseStoreService
    ]
})
export class LayoutModule {
    constructor() {}
}
