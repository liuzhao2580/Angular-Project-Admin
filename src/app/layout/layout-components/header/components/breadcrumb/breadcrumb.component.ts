import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'

import Routes from '@/app/routes'

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    animations: [
        trigger('breadcrumbAnimate', [
            transition(':enter', [
                animate('0.5s', keyframes([
                    style({ opacity: 0,transform: 'translateX(100px)' }),
                    style({ opacity: 0.5,transform: 'translateX(50px)' }),
                    style({ opacity: 1,transform: 'translateX(0px)' })
                ]))
            ]),
            transition(':leave', [
                animate('0.2s', keyframes([
                    style({ opacity: 1,transform: 'translateX(0px)' }),
                    style({ opacity: 0.5,transform: 'translateX(50px)' }),
                    style({ opacity: 0,transform: 'translateX(100px)' })
                ]))
            ])
        ])
    ]
})
export class BreadcrumbComponent implements OnInit {
    // 面包屑
    breadcrumb = []
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.getActivedRouteInfo()
        this.watchRoute()
    }

    // 监听路由
    watchRoute(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.getActivedRouteInfo()
            }
        })
    }

    // 获取当前的路由信息
    getActivedRouteInfo(): void {
        // 获取当前的路由
        const getCurrentRoute: string = this.router.url
        let gainRoutes = []
        Routes.forEach((item) => {
            if (getCurrentRoute !== '/dashboard') {
                if (item.children) {
                    const getFind = item.children.find((children_item) => children_item.path === getCurrentRoute)
                    if (getFind) {
                        gainRoutes.push({ path: item.path, data: item.data })
                        gainRoutes.push({ ...getFind })
                    }
                } else if (item.path === getCurrentRoute) gainRoutes.push({ ...item })
            }
        })
        this.breadcrumb = []
        this.breadcrumb.splice(1, 0, ...gainRoutes)
    }
}
