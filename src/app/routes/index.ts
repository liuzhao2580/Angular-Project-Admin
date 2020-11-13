import interface_router from './interface'
/**
 * @param {object} data 保存着一些侧边栏数据需要的
 * @param {boolean} submenuOpen 侧边栏的 submenu 是否展开 true  展开，默认都是 false
 * @param {boolean} breadcrumbFlag 是否显示在面包屑导航中 默认都是true 显示， false 不显示
 * @param {boolean} breadcrumbClickFlag 是否可以点击此面包屑跳转页面，默认都是 true 可以 点击 ， false 不可以点击
 * @param {array} auth  用户可以返回的权限  如果没有，说明所有用户都可以访问
 */
const routes: interface_router[] = [
    {
        path: '/dashboard',
        data: { title: '首页', icon: 'home' }
    },
    {
        path: '/document',
        data: { title: '文档', icon: 'exception' }
    },
    {
        path: '/article',
        data: { title: '文章', icon: 'profile', submenuOpen: false },
        children: [
            {
                path: '/article/list',
                data: { title: '文章列表', icon: 'unordered-list', level: 2,auth: [1, 2] }
            },
            {
                path: '/article/create',
                data: { title: '文章创建', icon: 'file-add', level: 2, auth: [1] }
            }
        ]
    },
    {
        path: '/multilevel-menu',
        data: { title: '多级菜单', icon: 'menu' },
        children: [
            {
                path: '/multilevel-menu/one-menu',
                data: { title: '一级菜单', icon: 'to-top',level: 2 },
                children: [
                    {
                        path: '/multilevel-menu/one-menu/two-menu',
                        data: { title: '二级菜单', icon: 'car',level: 3 }
                    },
                    {
                        path: '/multilevel-menu/one-menu/two-one-menu',
                        data: { title: '2-1级菜单', icon: 'bulb',level: 3 },
                        children: [
                            {
                                path: '/multilevel-menu/one-menu/two-one-menu/three-menu',
                                data: { title: '三级菜单', icon: 'bell',level: 4 }
                            },
                            {
                                path: '/multilevel-menu/one-menu/two-one-menu/three-one-menu',
                                data: { title: '3-1级菜单', icon: 'cloud',level: 4 },
                                children: [
                                    {
                                        path: '/multilevel-menu/one-menu/two-one-menu/three-one-menu/four-menu',
                                        data: { title: '四级菜单', icon: 'coffee',level: 5 }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: '/multilevel-menu/one-menu/two-two-menu',
                        data: { title: '2-2级菜单', icon: 'compass' ,level: 3}
                    }
                ]
            },
            {
                path: '/multilevel-menu/one-one-menu',
                data: { title: '1-1级菜单', icon: 'flag',level: 2 }
            }
        ]
    }
]
export default routes
