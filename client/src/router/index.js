import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/404.vue';

const router = new VueRouter({
    mode:'history',
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'*',component:NotFound}
    ]
});

export default router;