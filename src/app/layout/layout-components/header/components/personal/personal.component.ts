import { Component, OnInit } from '@angular/core'

import { getStorage } from '@/utils/storage'
import { UserService } from '@/app/api/modules/user.service'
import { UserStoreService } from '@/app/store-service/user-store/user-store.service'

interface dropdownList {
    icon: string,
    title: string
}

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    // 头像地址
    avatarSrc: string
    // 下拉框展示的数据
    dropdownList: dropdownList [] = [
        {
            icon: 'user',
            title: '个人信息'
        },
        {
            icon: 'github',
            title: 'GitHub'
        }
    ]
    constructor(private userService: UserService, private userStore: UserStoreService) {}

    ngOnInit(): void {
        this.init_UserInfo()
    }

    // 初始化 获取用户信息
    private init_UserInfo() {
        const { userId } = JSON.parse(getStorage('userInfo'))
        this.userService.userInfo_API(userId).subscribe({
            next: ({ data }) => {
                console.log(data, 'data')
                this.userStore.setUserInfo(data)
                this.avatarSrc = data.avatar
            }
        })
    }
}
