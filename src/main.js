import { createApp } from 'vue'
import App from './App.vue'
import logoUrl from '../logo_plain.png'

const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/png'
favicon.href = logoUrl

if (!favicon.parentNode) {
  document.head.appendChild(favicon)
}

createApp(App).mount('#app')
