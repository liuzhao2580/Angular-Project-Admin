import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    picCode
    constructor(private formBulider: FormBuilder,
        private router : Router,
        private domSanitizer: DomSanitizer,
        private httpClient: HttpClient) {}
    validateForm
    ngOnInit() :void {
        this.validateForm = this.formBulider.group({
            userName: ['admin', [Validators.required]],
            password: ['admin', [Validators.required]],
            code: ['', [Validators.required]]
        })
        this.gainPicCode()
    }

    // 首先获取图片验证码
    gainPicCode():void {
        this.httpClient.get('/api/pictureCode').subscribe(data=> {
            console.log(data, 'data')
             this.picCode = this.domSanitizer.bypassSecurityTrustHtml(data.data)
        })
    }
    // 提交按钮
    onSubmit():void {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty()
            this.validateForm.controls[key].updateValueAndValidity()
        }
        // 说明校验成功，可以发送数据请求
        if(this.validateForm.status === 'VALID') {
            console.log(this.validateForm.value)
            // this.router.navigateByUrl('/dashboard')
            this.httpClient.post('/api/login',this.validateForm.value).subscribe(data=> {
                console.log(data, 'data')
            })
        }
    }
}
