/**
 * token 的拦截器
 */
import { Injectable } from '@angular/core'
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http'
import { Router } from '@angular/router'
import { NzModalService } from 'ng-zorro-antd/modal'

import { Observable } from 'rxjs'

import { getCookie } from '@/utils/cookies'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private modal: NzModalService, private router: Router) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = getCookie('token')
        const { url } = req
        let setHeaders
        // 说明请求路径中包含 api 需要携带 token 请求头
        if (url.indexOf('api') !== -1) {
            // 说明 token 不存在
            if (!token) {
                this.router.navigateByUrl('/login').then(() => {
                    this.modal.warning({
                        nzTitle: '该用户未登录或登录已失效，请重新登录'
                    })
                })
            } else {
                setHeaders = {
                    'Authorization': `Bearer ${token}`
                }
            }
        }
        const authReq = req.clone({
            setHeaders
        })
        console.log(setHeaders, 'authReq')
        return next.handle(authReq)
    }
}
