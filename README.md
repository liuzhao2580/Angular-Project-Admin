### 运行项目 `npm start`
### 每次导入惰性加载特性模块后，重启项目
### 每次导入惰性加载特性模块后，重启项目
### 每次导入惰性加载特性模块后，重启项目
### 修改项目运行地址 直接在`angular.json`文件中修改[官方地址](https://angular.cn/cli/serve)
```json
{
    "projects": {
        // 项目名称
        "my-app": {
            ...
            "architect": {
                "serve": {
                    ...
                    "options": {
                        "browserTarget": "my-app:build",
                        // 配置跨域代理
                        "proxyConfig": "proxy.config.json",
                        "hmr": true,
                        "port": 4321,
                        // 自动在浏览器开启
                        "open": true
                    }
                    ...
                }
            }
            ...
        }
    }
}
```



#### [父组件样式穿透](https://angular.cn/guide/component-styles#host-context) 使用`:host-content()`伪类选择器
只有当某个祖先元素有 `CSS` 类 `theme-light` 时，才会把 `background-color` 样式应用到组件内部的所有` <h2>` 元素中。
```css
:host-context(.theme-light) h2 {
  background-color: #eef;
}
```
#### [selector](https://angular.cn/api/core/Directive#selector)  CSS 选择器用于在模板中标记出该指令，并触发该指令的实例化。
- element-name：根据元素名选取。
```js
@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
<app-submenu></app-submenu>
```

- .class：根据类名选取。
```js
@Component({
    selector: '.app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
// 这里的div 可以更换为任意的 html 标签
<div class='.app-submenu' ></div>
```

- [attribute]：根据属性名选取。
```js
@Component({
    selector: 'div[app-submenu]',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
// [tranData]='tranData' 传参
<div app-submenu [tranData]='tranData' ></div>
```

- [attribute=value]：根据属性名和属性值选取。

- :not(sub_selector)：只有当元素不匹配子选择器 sub_selector 的时候才选取。

- selector1, selector2：无论 selector1 还是 selector2 匹配时都选取。

### `Angular`路由指定跳转和返回上一级
###### 跳转到指定页面
```js
import { Router } from '@angular/router'
@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
    constructor( private router: Router ) {}

    ngOnInit(): void {}
    // 返回上一页
    public backHistory():void {
      // 两个方法都可以
        this.router.parseUrl('/dashboard')     // 把字符串解析为 UrlTree
        this.router.navigateByUrl('/dashboard') // 基于所提供的 URL 进行导航，必须使用绝对路径
    }
}
```
###### 返回上一级[Location](https://angular.cn/api/common/Location#location)
```js
import { Location } from '@angular/common'
@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
    constructor( private location: Location ) {}

    ngOnInit(): void {}
    // 返回上一页
    public backHistory():void {
        this.location.back()
    }
}
```