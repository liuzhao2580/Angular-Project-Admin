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
    constructor(private modal: NzModalService, private router: Router, private activeRoute: ActivatedRoute) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.checkLogin()
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): true | UrlTree {
        
        console.log(this.router.url, 'this.router')
        return this.checkLogin()
    }

    checkLogin(){
        // 获取 token 是否存在
        const getToken = getCookie('token')
        // 获取用户的权限
        const {user_role} = JSON.parse(getStorage('userInfo'))
        if (getToken) {
            function authLoop(routersArr = routes) {
                return routersArr.find(route => {
                    if(route.children) {
                        authLoop(route.children)
                    }
                    else {
                        if(route.data.auth) {
                            console.log( route.data.auth, ' route.data.auth')
                            return route.data.auth.find(dataItem => dataItem === user_role)
                        }
                        else return true
                    }
                })
            }
            // console.log(authLoop(), 'authLoop')
            return true
        }
        else {
            this.modal.warning({
                nzTitle: '该用户未登录或登录已失效，请重新登录'
            })
        }
        return this.router.parseUrl('/login')
      }
}
