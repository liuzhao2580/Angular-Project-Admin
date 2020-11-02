import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

import { getCookie } from '@/utils/cookies'

@Injectable({
    providedIn: 'root'
})
export class HttpConfigService {
    baseURL: string = '/api'
    static httpOptions = {
        header: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-csrf-token': getCookie('csrfToken')
        })
    }
    constructor(private httpClient: HttpClient) {}
    /**
     * GET 请求
     * @param {string} url 请求地址 
     * @param {any} params 请求参数，可以不传 
     */
    public httpGET(url, params): Observable<any> {
        return this.httpClient.get(this.baseURL + url, params)
    }
    /**
     * POST 请求
     * @param {string} url 请求地址 
     * @param {any} params 请求参数，可以不传 
     */
    public httpPOST(url, params): Observable<any> {
        return this.httpClient.post(this.baseURL + url, params)
    }
    // DELETE 请求
    // PUT 请求
}
