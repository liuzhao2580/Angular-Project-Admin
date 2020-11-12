### 运行项目 `npm start`
### 修改项目运行地址 直接在`package.json`文件中修改
```json
"scripts": {
    "ng": "ng",
--- "start" :"ng serve",
+++ "start": "ng serve --port 4321",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
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

- [attribute=value]：根据属性名和属性值选取。

- :not(sub_selector)：只有当元素不匹配子选择器 sub_selector 的时候才选取。

- selector1, selector2：无论 selector1 还是 selector2 匹配时都选取。