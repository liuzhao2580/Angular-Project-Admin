// 导入全部拦截器
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { BaseInterceptor } from './base-interceptor'
import { TokenInterceptor } from './token-interceptor'

// 注意 multi: true 选项。 这个必须的选项会告诉 Angular HTTP_INTERCEPTORS 是一个多重提供者的令牌，表示它会注入一个多值的数组，而不是单一的值。
export const httpInterceptorProvider = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: BaseInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }
]
