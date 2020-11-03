import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from '@/app/api/modules/user.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    picCode
    validateForm
    // 按钮加载中
    loginLoading: boolean = false
    constructor(
        private formBulider: FormBuilder,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private userAPI: UserService
    ) {}
    ngOnInit(): void {
        this.validateForm = this.formBulider.group({
            userName: ['admin', [Validators.required]],
            password: ['admin', [Validators.required]],
            code: ['', [Validators.required]]
        })
        this.gainPicCode()
    }

    // 首先获取图片验证码
    gainPicCode(): void {
        this.userAPI.login_code_API().subscribe((value) => {
            this.picCode = this.domSanitizer.bypassSecurityTrustHtml(value['data'])
        })
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
            // this.router.navigateByUrl('/dashboard')
            this.userAPI.login_API(this.validateForm.value).subscribe({
                next(value) {
                    console.log(value, 'value')
                },
                complete: ()=> this.loginLoading = false
            })
        }
    }
}
