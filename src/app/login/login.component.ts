import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { setCookie } from '@/utils/cookies'
import { setStorage } from '@/utils/storage'
import { UserService } from '@/app/api/modules/user.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    validateForm
    // 按钮加载中
    loginLoading: boolean = false
    constructor(
        private formBulider: FormBuilder,
        private router: Router,
        private userAPI: UserService
    ) {}
    ngOnInit(): void {
        this.validateForm = this.formBulider.group({
            userName: ['admin', [Validators.required]],
            password: ['admin', [Validators.required]]
        })
        this.gainCSRFToken()
    }

    // 首先获取 csrftoken
    gainCSRFToken(): void {
        this.userAPI.CSRFToken_API().subscribe()
    }
    // 提交按钮
    onSubmit(): void {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty()
            this.validateForm.controls[key].updateValueAndValidity()
        }
        // 说明校验成功，可以发送数据请求
        if (this.validateForm.status === 'VALID') {
            this.loginLoading = true
            this.userAPI.login_API(this.validateForm.value).subscribe({
                next: ({data})=> {
                    console.log(data, 'value')
                    setCookie('token', data.token)
                    setStorage("userInfo", {
                        userId: data.userId,
                        user_role: data.user_role,
                    })
                    this.router.navigateByUrl('/dashboard')
                },
                complete: ()=> this.loginLoading = false
            })
        }
    }
}
