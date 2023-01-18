import { createApp } from 'vue'
import { createPinia } from 'pinia'

import api from './api';

import App from './App.vue'
import router from './router'
import animate from 'animate.css'

const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(api)
    .use(animate)

app.mount('#app')
