import { Injectable } from '@angular/core'
import { userDate_interface } from '@/app/ts-declare/interface/user-interface'

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    // 用户基本信息
    private userInfo
    constructor() {}
    // 设置用户基本信息
    get _userInfo () {
        return this.userInfo
    }
    set _userInfo(userInfo: userDate_interface){
        this.userInfo = userInfo
    }
}
