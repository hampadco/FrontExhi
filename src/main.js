

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // اضافه کردن روتر

createApp(App)
  .use(router) // فعال‌سازی روتر
  .mount('#app'); // اتصال به <div id="app"> در index.html
