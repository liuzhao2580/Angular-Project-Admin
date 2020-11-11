import { Injectable } from '@angular/core'
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
    ActivatedRoute
} from '@angular/router'
import { Observable } from 'rxjs'

import { NzModalService } from 'ng-zorro-antd/modal'

import { getCookie } from '@/utils/cookies'
import { getStorage } from '@/utils/storage'
import routes from '@/app/routes/index'

@Injectable({
    providedIn: 'root'
})

/* 校验是否可以进入页面 */
export class LayoutAuthGuard implements CanActivate, CanActivateChild {
    constructor(private modal: NzModalService, private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            return this.checkLogin(state)
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        return this.checkLogin(state)
    }

    checkLogin(state){
        // 获取 token 是否存在
        const getToken = getCookie('token')
        // 获取用户的权限
        const {user_role} = JSON.parse(getStorage('userInfo'))
        if (getToken) {
            function checkLoop(routeArr = routes) {
                return routeArr.find(item => {
                    // 1.说明当前的路由匹配
                    if(item.path === state.url) {
                        // 1.1判断当前路由 是否存在 auth 字段
                        // 1.2如果存在就说明 需要验证当前的登录人是否有权访问
                        if(item.data.auth) {
                            return item.data.auth.find(authItem => authItem === user_role)
                        }
                        // 1.3不存在 auth 字段 说明 任何人都可以访问
                        else return true
                    }
                    // 2.如果当前路由不匹配，再判断是否存在 children 字段
                    else if(item.children) {
                       return checkLoop(item.children)
                    }
                    else return false
                })
            }
            const getPromisser = checkLoop()
            // 说明该路由 有权访问
            if(getPromisser) return true
            // 说明该路由无权访问
            else {
                this.modal.warning({
                    nzTitle: '没有权限'
                })
                return false
            }
        }
        else {
            this.modal.warning({
                nzTitle: '该用户未登录或登录已失效，请重新登录'
            })
        }
        return this.router.parseUrl('/login')
      }
}
