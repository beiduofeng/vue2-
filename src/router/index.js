import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//引入路由组件
import home from '@/pages/home'
import login from '@/pages/login'
import search from '@/pages/search'

//配置路由
export default new VueRouter({
    routes: [
        {
            path: "*",
            redirect: "/home",
        },
        {
            path: "/home",
            component: home,
            //路由原信息
            mate: {
                show: true
            }
        },
        {
            path: "/login",
            component: login,
            mate: {
                show: false
            }
        },
        {
            path: "/search",
            component: search,
            mate: {
                show: false
            }
        },
    ]
})