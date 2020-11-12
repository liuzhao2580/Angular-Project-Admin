import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    public userInfo: object // 用户基本信息
    constructor() {}
    // 设置用户基本信息
    public setUserInfo(userInfo: object):void{
        this.userInfo = userInfo
    }
}
