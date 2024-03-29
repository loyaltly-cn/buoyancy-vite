# 固体浮材在线下单系统

# Vue 3 + Vite2 + <a href="https://github.com/varletjs/varlet" target="_blank">Varlet ui</a>
## 项目使用 unplugin-vue-components 所以再vue中不需要import 组件 会自动注入
## Google <a href="https://modelviewer.dev" target="_blank"> model-viewer</a> 实现3D渲染
## <a href="https://www.smtpjs.com" target="_blank"> smtp.js </a> 发送邮箱功能
## 安装pnpm 命令
```shell
npm install -g pnpm
```
# 构建命令

| command              | effect                   |
|-----------------|----------------------|
| `pnpm install ` | git clone 之后执行 安装依赖库 |
| `pnpm run dev`  | 启动项目                 |
| `vite build`    | 编译 打包项目              |
| `vite preview`  | 本地预览项目               |


# 一些注意事项

#### 本项目使用 vue3 setup 语法糖 完成编写

##### model-viewer `npm` 引入有问题 故使用  unpkg cdn 引入

```html
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
```

### 响应式数据都在 `material.js` 内
 ```js
export example
export process
 ```
`example` && `process` 只有选中example 的内容 通过 props && emit 传递 给 index.vue 页面 再次转发给 execution-process.vue components 实现数据交互

## smtp.js 发送邮箱 -> shooping.vue
```js
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "loyaltly.cn@gmail.com",
  Password : "9A464BB5FF70F00C31FC127936826B62A27F",
  // To : 'jimmy@rovmaker.org',
  To : '1464808104@qq.com',
  From : "loyaltly.cn@gmail.com",
  Subject : "固体浮材在线下单",
  Body : '客户邮箱:'+email.value+'  电话'+phone.value+' 称呼:'+name.value+'订单号'+timeStamp+' 链接:https://rovmaker.loyaltly.cn/sfm/#/order?'+timeStamp
})
```
请在smtp申请token方能使用
