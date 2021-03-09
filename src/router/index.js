import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Mine = () => import('../views/mine/Mine')
const Shopcar = () => import('../views/shopcar/Shopcar')


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
        path:'/mine',
        component:Mine
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shopcar',
        component:Shopcar
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

// 3.导出router
export default router


