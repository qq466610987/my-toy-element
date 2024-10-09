import { createApp } from 'vue'
import App from './App.vue'
import ToyElement from 'toy-element'
import "@toy-element/theme/index.css"

createApp(App)
.use(ToyElement)
.mount('#app')
