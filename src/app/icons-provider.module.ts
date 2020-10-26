import { NgModule } from '@angular/core'
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons'

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon'

const icons = [UserOutline, LockOutline]

@NgModule({
    imports: [NzIconModule],
    exports: [NzIconModule],
    providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class IconsProviderModule {}
