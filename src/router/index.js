import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showTab: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showTab: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            showTab: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showTab: true
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

//导出router
export default router