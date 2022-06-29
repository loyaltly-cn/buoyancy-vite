# 固体浮材在线下单系统

# Vue 3 + Vite2 + <a href="https://github.com/varletjs/varlet" target="_blank">Varlet ui</a>

## Google <a href="https://modelviewer.dev" target="_blank"> model-viewer</a> 实现3D渲染
## <a href="https://www.smtpjs.com" target="_blank"> smtp.js </a> 发送邮箱功能

# 构建命令

| 命令              | 作用                   |
|-----------------|----------------------|
| `pnpm install ` | git clone 之后执行 安装依赖库 |
| `pnpm run dev`  | 启动项目                 |
| `vite build`    | 编译 打包项目              |
 | `vite preview`  | 本地预览项目               |


# [注意*]()

#### 本项目使用 vue3 setup 语法糖 完成编写

##### model-viewer `npm` 引入有问题 故使用  unpkg cnd 引入

`<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>`

### 响应式数据都在 `material.js` 内
#### `export`
`example` && `process` 只有选中example 的内容 通过 props && emit 传递 给 index.vue 页面 再次转发给 execution-process.vue components 实现数据交互 
