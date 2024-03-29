import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./js/router";
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import 'default-passive-events'
const  app = createApp(App)

app.use(router)
app.use(Varlet)

app.mount('#app')
