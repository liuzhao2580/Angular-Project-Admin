import { Component, OnInit } from '@angular/core'
import {FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    validateForm
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.validateForm = this.formBuilder.group({
            userName: '',
            password: ''
        })
    }

    // 用户登录
    submitForm():void{
        console.log(this.validateForm.value);
        
    }
}
