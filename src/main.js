import App from './App.vue';

import router from './router';
import api from './api';
import stores from './stores';

import 'normalize.css';
import 'animate.css';
import 'hover.css';

const app = createApp(App);

app.use(stores).use(router).use(api);

app.mount('#app');
