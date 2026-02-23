import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/live', component: LivePage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import { createApp, patchProp } from 'vue'
import App from './App.vue'
import LivePage from './views/LivePage.vue'

createApp(App).use(router).mount('#app')
