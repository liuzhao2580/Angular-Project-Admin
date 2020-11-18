import { Component, OnInit } from '@angular/core'
import { userDate_interface } from '@/app/ts-declare/interface/user-interface'
import { UserService } from '@/app/api/modules/user.service'
import { getStorage } from '@/utils/storage'

@Component({
    selector: 'app-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
    // basic-info map
    basicInfoMap: userDate_interface = {
        avatar: null,
        createTime: null,
        email: null,
        gender: null,
        nickName: null,
        phone: null,
        userId: null,
        userName: null,
        user_role: null
    }
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.initUser()
    }
    // gain user info
    initUser(): void {
        const { userId } = JSON.parse(getStorage('userInfo'))
        this.userService.userInfo_API(userId).subscribe({
            next: ({ data }) => {
                this.basicInfoMap = data
            }
        })
    }
}
