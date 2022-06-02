import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
      vue(),
      components({
        resolvers:[VarletUIResolver()]
      })
  ],
  base:'./',
  server:{
    host:'0.0.0.0'
  }
})
