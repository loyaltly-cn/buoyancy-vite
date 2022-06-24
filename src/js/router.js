import {createRouter,createWebHashHistory} from "vue-router";
import index from '../page/index.vue'
import preview from '../components/model.vue'
import admin from '../page/admin.vue'
const routers = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: '/index',
        component:index
    },
    {
      path: '/admin',
      component: admin
    },
    {
        path: '/preview',
        component: preview
    }
]


export const router = createRouter({
    history:createWebHashHistory('/sfm'),
    routes:routers
})
