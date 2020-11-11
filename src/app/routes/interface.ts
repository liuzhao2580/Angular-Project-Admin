export default interface routerArray {
    path: string  // 路径
    data: DataObject // 基本的数据
    children?: ChildrenObject[] // 子路由
}

class DataObject {
    title: string // 名称
    icon: string // 图标
    auth?: Array<number> // 权限 可选 用户可以返回的权限  如果没有，说明所有用户都可以访问
    submenuOpen?: boolean // 是否显示在面包屑导航中 默认都是true 显示， false 不显示
}
class ChildrenObject {
    path: string
    data: DataObject
    children?: ChildrenObject[]
}