import { Component, OnInit } from '@angular/core'

import { BaseStoreService } from '@/app/store-service/base-store/base-store.service'
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed: boolean = false
    constructor(private baseStoreService: BaseStoreService) {}

    ngOnInit(): void {}
    // 点击 改变侧边栏展开关闭按钮
    siderStatus(): void {
        this.baseStoreService.AsideChange.subscribe(status => this.isCollapsed = status)
        this.baseStoreService.setAsideChange(!this.isCollapsed)
    }
}
