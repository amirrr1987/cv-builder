import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'
import print from 'vue3-print-nb'
import i18n from "@/i18n";
import './assets/style/index.css'
import './assets/style/index.less'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'ant-design-vue/dist/antd.less';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(print)
app.use(i18n)
app.mount('#app')
