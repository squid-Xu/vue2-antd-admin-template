
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
    },
    {
        path: '/navigation-1',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '导航一' }
            }
        ]
    },
    {
        path: '/navigation-2',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '导航二' }
            }
        ]
    },
    {
        path: '/navigation-3',
        component: Layout,
        meta: { title: '导航三' },
        children: [
            {
                path: 'option-3',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项三' },
            },
            {
                path: 'option-4',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项四' },
            },
            {
                path: 'submenu',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '子菜单' },
                children:[
                    {
                        path: 'option-5',
                        component: () => import('../views/navigation/index.vue'),
                        meta: { title: '选项五' },
                    },
                    {
                        path: 'option-6',
                        component: () => import('../views/navigation/index.vue'),
                        meta: { title: '选项六' },
                    }
                ]
            }
        ]
    },
    {
        path: '/navigation-4',
        component: Layout,
        meta: { title: '导航四' },
        children: [
            {
                path: '',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项七' },
            },
            {
                path: 'option-8',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项八' },
            },
            {
                path: 'option-9',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项九' },
            },
            {
                path: 'option-10',
                component: () => import('../views/navigation/index.vue'),
                meta: { title: '选项十' },
            },
        ]
    },
];