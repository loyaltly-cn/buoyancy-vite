import {createRouter,createWebHashHistory} from "vue-router";
import index from '../page/index.vue'
import preview from '../components/model.vue'
import order from '../page/order.vue'
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
      path: '/order',
      component: order
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
