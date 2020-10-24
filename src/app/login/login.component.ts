import { Component, OnInit } from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private formBulider: FormBuilder) {

    }
    validateForm
    ngOnInit() :void {
        this.validateForm = this.formBulider.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]]
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
            console.log(this.validateForm.value);
            
        }
    }
}
