export default interface routerArray {
    path: string  // 路径
    data: DataObject // 基本的数据
    children?: ChildrenObject[] // 子路由
}

class DataObject {
    title: string // 名称
    icon: string // 图标
    level?: number // 路由嵌套级别，不填代表默认1级，2 代表2级，3代表3级...
    auth?: Array<number> // 权限 可选 用户可以返回的权限  如果没有，说明所有用户都可以访问
    submenuOpen?: boolean // 侧边栏的 submenu 是否展开 true  展开，默认都是 false
    breadcrumbFlag?: boolean // 是否显示在面包屑导航中 默认都是true 显示， false 不显示
    breadcrumbClickFlag?:boolean // 是否可以点击此面包屑跳转页面，默认都是 true 可以 点击 ， false 不可以点击
}
class ChildrenObject {
    path: string
    data: DataObject
    children?: ChildrenObject[]
}