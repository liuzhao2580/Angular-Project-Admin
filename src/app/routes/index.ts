import interface_router from './interface'
/**
 * @param {object} data 保存着一些侧边栏数据需要的
 * @param {boolean} submenuOpen 侧边栏的 submenu 是否展开 true  展开，默认都是 false
 * @param {boolean} breadcrumbFlag 是否显示在面包屑导航中 默认都是true 显示， false 不显示
 * @param {boolean} breadcrumbClickFlag 是否可以点击此面包屑跳转页面，默认都是 true 可以 点击 ， false 不可以点击
 * @param {array} auth  用户可以返回的权限  如果没有，说明所有用户都可以访问
 */
const routes:interface_router[] = [
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
                data: {title: '文章列表', icon:'unordered-list', auth: [1, 2]}
            },
            {
                path: '/article/create',
                data: {title: '文章创建', icon:'file-add', auth: [1]}
            }
        ]
    },
    {
        path: '/aaaa',
        data: {title:'test', icon: 'profile',submenuOpen: false, auth: [1]},
        children: [
            {
                path: '/aaaa/1',
                data: {title: 'a-1', icon:'unordered-list'},
                children: [
                    {
                        path: '/aaaa/1/1',
                        data: {title: 'a-1-1', icon:'unordered-list'}
                    },
                ]
            },
            {
                path: '/aaaa/2',
                data: {title: 'a-2', icon:'file-add'}
            }
        ]
    },
]
export default routes