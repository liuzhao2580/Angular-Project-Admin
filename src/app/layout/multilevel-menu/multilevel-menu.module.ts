import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MultilevelMenuRoutingModule } from './multilevel-menu-routing.module'
import { OneMenuComponent } from './one-menu/one-menu.component'
import { TwoMenuComponent } from './two-menu/two-menu.component'
import { TwoTwoMenuComponent } from './two-two-menu/two-two-menu.component'
import { ThreeMenuComponent } from './three-menu/three-menu.component'
import { FourMenuComponent } from './four-menu/four-menu.component'

@NgModule({
    declarations: [
        OneMenuComponent,
        TwoMenuComponent,
        TwoTwoMenuComponent,
        ThreeMenuComponent,
        FourMenuComponent
    ],
    imports: [CommonModule, MultilevelMenuRoutingModule]
})
export class MultilevelMenuModule {}
