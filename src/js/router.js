import {createRouter, createMemoryHistory, createWebHashHistory} from "vue-router";
import index from '../components/index.vue'

const routers = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: '/index',
        component:index
    }
]


export const router = createRouter({
    history:createWebHashHistory('sfm'),
    routes:routers
})
