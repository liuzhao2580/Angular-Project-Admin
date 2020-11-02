/**
 * 统一处理请求 拦截
 */
import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'

import { NzMessageService } from 'ng-zorro-antd/message'
@Injectable()
export class BaseInterceptor implements HttpInterceptor {
    constructor(private message : NzMessageService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<
        | HttpHeaderResponse
        | HttpResponse<any>
    > {
        console.log(req, 'req')
        return next.handle(req).pipe(mergeMap((event: any) => {
            // 只有当请求的返回状态是 httpresponse  并且 状态码是 200 的时候，才说明请求成功
            if(event instanceof HttpResponse && event.status === 200) return this.handleError(event)
            return of(event)
        }),
        // 说明请求失败
        catchError((err: HttpErrorResponse) => this.handleError(err)))
    }
    private handleError(event: HttpResponse<any> | HttpErrorResponse | any):Observable<any> {
        console.log(event, 'event')
        switch (event.status) {
            case 200: 
                break
            case 404:
                this.message.error("请求地址错误")
                break;
            default:
                this.message.error(event.statusText || event)
                break;
        }
        return of(event)
    }
}
