/**
 * 统一处理请求 拦截
 */
import { Injectable } from '@angular/core'
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpHeaderResponse,
    HttpResponse
} from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs'
import { catchError, mergeMap, retry, timeout } from 'rxjs/operators'

import { NzMessageService } from 'ng-zorro-antd/message'

import { getCookie } from '@/utils/cookies'
@Injectable()
export class BaseInterceptor implements HttpInterceptor {
    constructor(private message: NzMessageService) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpHeaderResponse | HttpResponse<any>> {
        console.log(req, 'req')
        // 设置请求头
        const setHeaders = {
            'x-csrf-token': getCookie('csrfToken')
        }
        // 修改请求头的拦截器
        const authReq = req.clone({
            setHeaders
        })
        return next.handle(authReq).pipe(
            retry(1),
            timeout(60000),
            mergeMap((event: any) => {
                // 只有当请求的返回状态是 httpresponse  并且 状态码是 200 的时候，才说明请求成功
                if (event instanceof HttpResponse && event.status === 200)
                    return this.handleData(event)
                return of(event)
            }),
            // 说明请求失败
            catchError((err: HttpErrorResponse) => this.handleData(err))
        )
    }
    private handleData(
        event: HttpResponse<any> | HttpErrorResponse | any
    ): Observable<any> {
        console.log(event, 'event')
        switch (event.status) {
            case 200:
                if (event.body.code !== 0)
                    return throwError(event.body.msg || event)
                else return of(event)
            case 404:
                this.message.error('请求地址错误')
                return of(event)
                break
            default:
                this.message.error(event.statusText || event)
                return of(event)
                break
        }
    }
}
