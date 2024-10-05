import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

// Nhập CSS của các thư viện trước
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas); // Add the icons to the library

// Nhập CSS tùy chỉnh sau cùng để đảm bảo ghi đè được các lớp CSS khác
import './assets/main.css';

// Khởi tạo Vue app
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
