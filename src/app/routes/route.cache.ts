// https://segmentfault.com/a/1190000011430157
// https://angular.cn/api/router/RouteReuseStrategy#routereusestrategy
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router'
export class RouterCache implements RouteReuseStrategy {
    cacheRouteMap: { [key: string]: any } = {}
    // 确定是否应分离此路由（及其子树）以便以后重用
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log(4, 'shouldDetach')
        if (!route.data.keep) return false
        return true
    }
    // 存储分离的路线。
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log(5, 'store')
        this.cacheRouteMap[route.routeConfig.path] = {
            snapshot: route,
            handle
        }
    }
    // 确定是否应重新连接此路由（及其子树）
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log(3, 'shouldAttach')
        if(route.routeConfig.path === 'login') this.cacheRouteMap = {}
        return !!route.routeConfig && !!this.cacheRouteMap[route.routeConfig.path]
    }
    // 检索以前存储的路线
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.log(2, 'retrieve')
        if (
            !route.routeConfig ||
            route.routeConfig.loadChildren ||
            !this.cacheRouteMap[route.routeConfig.path]
        )
            return null
        return this.cacheRouteMap[route.routeConfig.path].handle
    }
    // 确定是否应重用路由
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log(1, 'shouldReuseRoute')
        return future.routeConfig === curr.routeConfig
    }
}
