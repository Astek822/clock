// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css' // We'll create this next

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')


