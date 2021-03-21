import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Mine = () => import('../views/mine/Mine')
const Shopcart = () => import('../views/shopcart/Cart')
const Detail = () => import('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Mine
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Shopcart
    },
    {   
        path:'/detail/:iid',
        component:Detail

    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

// 3.导出router
export default router


