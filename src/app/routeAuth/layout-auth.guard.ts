import { Injectable } from '@angular/core'
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router'
import { Observable } from 'rxjs'

import { NzModalService } from 'ng-zorro-antd/modal'

import { getCookie } from '@/utils/cookies'

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
        return this.checkLogin()
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): true | UrlTree {
        return this.checkLogin()
    }

    checkLogin(){
        // 获取 token 是否存在
        const getToken = getCookie('token')
        if (getToken) return true
        else {
            this.modal.warning({
                nzTitle: '该用户未登录或登录已失效，请重新登录'
            })
        }
        return this.router.parseUrl('/login')
      }
}
