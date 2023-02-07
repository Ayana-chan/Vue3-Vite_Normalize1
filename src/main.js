import App from './App.vue'
import router from './router'

import api from './api';

import 'normalize.css';
import 'animate.css';
import 'hover.css';

const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(api)

app.mount('#app')
