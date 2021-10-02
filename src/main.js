import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification';
import './styles/styles.scss'
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App)
  .use(router)
  .use(VueToast, {
    position: 'top-right',
    duration: 4000
  })
  .mount('#app')
