import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import './pcss/style.pcss'

const emitter = mitt()
const app = createApp(App).use(router)

app.provide('emitter', emitter)
app.config.globalProperties.emitter = emitter
app.mount('#app')
