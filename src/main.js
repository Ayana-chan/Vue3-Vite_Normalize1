import App from './App.vue';
import router from './router';

import api from './api';
import pinia from './stores';

import 'normalize.css';
import 'animate.css';
import 'hover.css';

const app = createApp(App);

app.use(pinia).use(router).use(api);

app.mount('#app');
