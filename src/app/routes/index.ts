/**
 * @param {object} data 保存着一些侧边栏数据需要的
 * @param {boolean} submenuOpen 侧边栏的 submenu 是否展开 true  展开，默认都是 false
 * @param {boolean} breadcrumbFlag 是否显示在面包屑导航中 默认都是true 显示， false 不显示
 */

export default [
    {
        path: '/dashboard',
        data: {title: '首页', icon: 'home'}
    },
    {
        path: '/document',
        data: {title:'文档', icon: 'exception'}
    },
    {
        path: '/article',
        data: {title:'文章', icon: 'profile',submenuOpen: false},
        children: [
            {
                path: '/article/list',
                data: {title: '文章列表', icon:'unordered-list'}
            },
            {
                path: '/article/create',
                data: {title: '文章创建', icon:'file-add'}
            }
        ]
    }
]