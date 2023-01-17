import { createApp } from 'vue'
import { createPinia } from 'pinia'

import api from './api';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(api)

app.mount('#app')
