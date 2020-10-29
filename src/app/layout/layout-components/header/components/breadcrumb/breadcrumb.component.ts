import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import Routes from '@/app/routes'

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
    // 面包屑
    breadcrumb = []
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.getActivedRouteInfo()
        this.watchRoute()
    }

    // 监听路由
    watchRoute():void {
        this.router.events.subscribe(event => {
            if(event instanceof NavigationEnd) {
                this.getActivedRouteInfo()
            }
        })
    }

    // 获取当前的路由信息
    getActivedRouteInfo():void {
        // 获取当前的路由
        const getCurrentRoute:string = this.router.url
        let gainRoutes = []
        Routes.forEach(item => {
            if(getCurrentRoute !== '/dashboard'){
                if(item.children) {
                    const getFind = item.children.find(children_item => children_item.path === getCurrentRoute)
                    if(getFind) {
                        gainRoutes.push({path: item.path, data: item.data})
                        gainRoutes.push({...getFind})
                    }
                }
                else if(item.path === getCurrentRoute) gainRoutes.push({...item})
            }
        })
        this.breadcrumb = []
        this.breadcrumb.splice(1, 0, ...gainRoutes) 
    }
}
