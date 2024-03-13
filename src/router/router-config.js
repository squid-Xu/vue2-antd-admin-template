
const Layout = () => import('../layout/index.vue')

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('../views/home/index.vue'),
                meta: { title: '首页' }
            }
        ]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('../views/form/index.vue'),
                meta: { title: '表单' }
            }
        ]
    }
];