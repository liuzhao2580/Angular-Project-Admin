/**
 * @param {object} data 保存着一些侧边栏数据需要的
 * @param {boolean} submenuOpen 侧边栏的 submenu 是否展开 true  展开，默认都是 false
 * @param {boolean} breadcrumbFlag 是否显示在面包屑导航中 默认都是true 显示， false 不显示
 * @param {any} auth  用户可以返回的权限  如果没有，说明所有用户都可以访问
 */

export default [
    {
        path: '/dashboard',
        data: {title: '首页', icon: 'home'}
    },
    {
        path: '/document',
        data: {title:'文档', icon: 'exception', auth: [1]}
    },
    {
        path: '/article',
        data: {title:'文章', icon: 'profile',submenuOpen: false},
        children: [
            {
                path: '/article/list',
                data: {title: '文章列表', icon:'unordered-list', auth: [2]}
            },
            {
                path: '/article/create',
                data: {title: '文章创建', icon:'file-add', auth: [1]}
            }
        ]
    }
]