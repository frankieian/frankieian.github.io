import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';


import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
