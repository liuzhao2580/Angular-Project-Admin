import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OneMenuComponent }from './one-menu/one-menu.component'
import { TwoMenuComponent } from './two-menu/two-menu.component'
import { TwoTwoMenuComponent } from './two-two-menu/two-two-menu.component'
import { ThreeMenuComponent } from './three-menu/three-menu.component'
import { FourMenuComponent } from './four-menu/four-menu.component'
 
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/multilevel-menu/one-one-menu'
            },
            {
                path: 'one-menu',
                pathMatch: 'full',
                redirectTo: '/multilevel-menu/one-menu/two-menu'
            },
            {
                path: 'one-menu/two-one-menu',
                pathMatch: 'full',
                redirectTo: '/multilevel-menu/one-menu/two-one-menu/three-menu',
            },
            {
                path: 'one-menu',
                data: {title: '一级菜单',icon: 'to-top'},
                children: [
                    {
                        path: 'two-menu',
                        data: {title: '二级菜单',icon: 'car'},
                        component: TwoMenuComponent
                    },
                    {
                        path: 'two-one-menu',
                        data: {title: '2-1级菜单',icon: 'bulb'},
                        children: [
                            {
                                path: 'three-menu',
                                data: {title: '三级菜单',icon: 'bell'},
                                component: ThreeMenuComponent
                            },
                            {
                                path: 'three-one-menu',
                                data: {title: '3-1级菜单',icon: 'cloud'},
                                children: [
                                    {
                                        path: 'four-menu',
                                        data: {title: '四级菜单',icon: 'coffee '},
                                        component: FourMenuComponent
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'two-two-menu',
                        data: {title: '2-2级菜单',icon: 'compass'},
                        component: TwoTwoMenuComponent
                    },
                ]
            },
            {
                path: 'one-one-menu',
                data:{title: '1-1级菜单', icon: 'flag'},
                component: OneMenuComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MultilevelMenuRoutingModule {}
