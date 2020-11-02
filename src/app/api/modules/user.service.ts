import { Injectable } from '@angular/core'
import { HttpConfigService } from '../http-config.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http : HttpConfigService) {}
    // 获取用户登录验证码
    public login_code_API() {
        return this.http.httpGET('/pictureCode1')
    }
    // 用户登录
    public login_API(params) {
        return this.http.httpPOST('/login', params)
    }
}
