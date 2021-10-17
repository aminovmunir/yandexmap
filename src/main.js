import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Yandex Map
import YmapPlugin from 'vue-yandex-maps'
const settings = {
    apiKey: '0e28fd72-7fe1-44b9-b35d-98fa5ea5565a',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1',
}

createApp(App).use(store).use(router).use(YmapPlugin, settings).mount('#app')