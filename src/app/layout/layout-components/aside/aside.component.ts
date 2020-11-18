import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { BaseStoreService } from '@/app/store-service/base-store/base-store.service'
import {routerArray} from '@/app/ts-declare/interface/router-interface'

import Routes from '@/app/routes'
import { getStorage } from '@/utils/storage'
@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
    // 侧边栏 展开闭合属性
    isCollapsed: boolean
    // 侧边栏数组
    AsideRoutes: routerArray []
    constructor(
        private baseStoreService: BaseStoreService,
        private router: Router
    ) {
        this.baseStoreService.AsideChange.subscribe(
            (state) => {
                this.isCollapsed = state
            }
        )
    }

    ngOnInit(): void {
        this.init_submenu()
    }
    // 初始化侧边栏数据
    init_submenu(): void {
        const getRoutes = Routes
        let setRoutes = []
        // 获取用户的权限
        const { user_role } = JSON.parse(getStorage('userInfo'))
        function hasPromisser(route, role): boolean {
            return route.data.auth.includes(role)
        }
        function routerLoop(routeArr = getRoutes) {
            let getArr = []
            routeArr.forEach((item) => {
                // 说明有子路由
                if (item.children) {
                    // 说明需要权限  说明 子路由下的所有路由都需要权限
                    if (item.data.auth) {
                        if (hasPromisser(item, user_role)) {
                            getArr.push({
                                ...item,
                                children: item.children
                            })
                        }
                    }
                    // 说明父路由不需要权限 子路由权限 需要判断
                    else {
                        const getLoopArr = routerLoop(item.children)
                        if (getLoopArr.length > 0)
                            getArr.push({
                                ...item,
                                children: getLoopArr
                            })
                    }
                }
                // 说明没有子路由
                else {
                    // 说明需要权限
                    if (item.data.auth) {
                        if (hasPromisser(item, user_role))
                            getArr.push({
                                ...item
                            })
                    } else
                        getArr.push({
                            ...item
                        })
                }
            })
            return getArr
        }
        setRoutes = routerLoop()

        // 判断 侧边栏是否展开
        // 判断当前的路由地址  是否存在父级菜单 并且 当前路由地址中包含父级的地址
        const getIndex: number = setRoutes.findIndex(
            (item) => item.children && this.router.url.includes(item.path)
        )
        if (getIndex != -1) setRoutes[getIndex].data.submenuOpen = true
        
        this.AsideRoutes = setRoutes
    }
    // 当侧边栏展开的时候触发
    openHandler(data):void {
        this.AsideRoutes.forEach(item => {
            if(data.title === item.data.title && item.children) item.data.submenuOpen = true
            else if(item.children) item.data.submenuOpen = false
        })
    }
}
