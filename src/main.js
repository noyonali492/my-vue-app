import { createApp } from 'vue';
import App from './App.vue';

// Create the app instance first
const app = createApp(App);

// Define the global property
app.config.globalProperties.$snippet = (val) => {
    if (!val || typeof val !== 'string') return '';
    return val.slice(0, 40);
};

// Mount the app
app.mount('#app');
