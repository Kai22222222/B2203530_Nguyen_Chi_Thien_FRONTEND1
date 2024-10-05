
import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css';
import router from "./router";

//luu y
const app = createApp(App);
app.use(router);
app.mount('#app');
