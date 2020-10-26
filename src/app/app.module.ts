import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'

import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { zh_CN } from 'ng-zorro-antd/i18n'

import { IconsProviderModule } from './icons-provider.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NGZORRO_arr } from '../utils/import-NG-ZORRO'
import { LoginComponent } from './login/login.component'
import { Error404Component } from './error404/error404.component'

registerLocaleData(zh)
@NgModule({
    declarations: [AppComponent, LoginComponent, Error404Component],
    imports: [
        BrowserModule,
        OverlayModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ...NGZORRO_arr,
        IconsProviderModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {}
}
