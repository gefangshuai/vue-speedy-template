export default [
    {
        path: '/',
        name: 'Main',
        redirect: '/home',
        component: () => import('vue-speedy/src/view/main'),
        meta: {
            title: '首页',
            notCache: true,
            authenticated: true,
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: 'md-home',
                    notCache: true,
                    authenticated: true,
                    notClose: true                  // 不支持关闭
                },
                component: () => import('@/view/single-page/home')
            },
            {
                path: '/profile',
                name: 'Profile',
                meta: {
                    authenticated: true,
                    hide: true,
                    title: '个人中心'
                },
                component: () => import('vue-speedy/src/view/main/components/profile'),
            }
        ]
    }, {
        name: 'DDD',
        path: '/ddd',
        meta: {
            icon: 'md-home',
            authenticated: true,
            title: '测试'
        }
    }
]
