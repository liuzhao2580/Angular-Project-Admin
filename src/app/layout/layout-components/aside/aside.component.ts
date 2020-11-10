import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { BaseStoreService } from '@/app/store-service/base-store/base-store.service'

import Routes from '@/app/routes'
@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
    // 侧边栏 展开闭合属性
    isCollapsed: boolean
    // 侧边栏数组
    AsideRoutes: Array<object>
    constructor(
        private baseStoreService: BaseStoreService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.baseStoreService.AsideChange.subscribe(
            (state) => (this.isCollapsed = state)
        )
    }

    ngOnInit(): void {
        this.submenuOpen()
    }
    // 判断 侧边栏是否展开
    submenuOpen(): void {
        const getRoutes = Routes
        // 判断当前的路由地址  是否存在父级菜单 并且 当前路由地址中包含父级的地址
        const getIndex: number = getRoutes.findIndex(
            (item) => item.children && this.router.url.includes(item.path)
        )
        if (getIndex != -1) getRoutes[getIndex].data.submenuOpen = true
        this.AsideRoutes = getRoutes
    }
}
