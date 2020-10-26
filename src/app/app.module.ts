import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { NGZORRO_arr } from '@/utils/import-NG-ZORRO'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { zh_CN } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { IconsProviderModule } from './icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Error404Component } from './error404/error404.component'

registerLocaleData(zh)
@NgModule({
    declarations: [AppComponent, LoginComponent, Error404Component],
    imports: [
        BrowserModule,
        ...NGZORRO_arr,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {}
}
