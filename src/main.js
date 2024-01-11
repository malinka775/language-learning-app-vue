import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './index.css'
import baseComponents from './components/base';

const app = createApp(App)

app.use(createPinia())

app.use(router)

baseComponents.forEach((cmp) => app.component(cmp.name, cmp))

app.mount('#app')
