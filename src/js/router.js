import {createRouter, createMemoryHistory, createWebHashHistory} from "vue-router";
import index from '../components/index.vue'
import test from '../components/test.vue'

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
        path: '/test',
        component: test
    }
]


export const router = createRouter({
    history:createWebHashHistory('/sfm'),
    routes:routers
})
