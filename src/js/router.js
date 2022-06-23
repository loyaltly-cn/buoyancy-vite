import {createRouter,createWebHashHistory} from "vue-router";
import index from '../components/index.vue'
import preview from '../components/model.vue'

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
        path: '/preview',
        component: preview
    }
]


export const router = createRouter({
    history:createWebHashHistory('/sfm'),
    routes:routers
})
