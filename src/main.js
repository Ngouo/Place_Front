import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'; // Importez votre routeur
import { MotionPlugin } from '@vueuse/motion'

createApp(App)
.use(router)
.use(MotionPlugin)
.mount('#app');
