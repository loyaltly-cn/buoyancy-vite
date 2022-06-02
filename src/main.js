import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./js/router";
import Varlet from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

const  app = createApp(App)

app.use(router)
app.use(Varlet)

app.mount('#app')