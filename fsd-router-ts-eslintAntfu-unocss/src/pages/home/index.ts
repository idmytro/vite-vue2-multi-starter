import { type RouteConfig } from 'vue-router'
import HomePage from './HomePage.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

export default routes
