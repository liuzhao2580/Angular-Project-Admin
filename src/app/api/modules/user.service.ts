import { Injectable } from '@angular/core'
import { HttpConfigService } from '../http-config.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http : HttpConfigService) {}
    // 获取 csrf-token 发送一条随机请求
    public CSRFToken_API() {
        return this.http.httpGET('/CSRFToken')
    }
    // 用户登录
    public login_API(params) {
        return this.http.httpPOST('/login', params)
    }
    // 获取用户基本资料 params 用户ID
    public userInfo_API(params) {
        return this.http.httpGET(`/api/userInfo/${params}`)
    }
}
