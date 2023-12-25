import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import('../layout/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: () => import('../views/home/index.vue')
                }
            ]
        }
    ]
})

export default router