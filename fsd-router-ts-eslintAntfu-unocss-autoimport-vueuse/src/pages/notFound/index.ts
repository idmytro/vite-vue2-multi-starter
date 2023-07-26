import { type RouteConfig } from 'vue-router'
import NotFoundPage from './NotFoundPage.vue'

const routes: RouteConfig[] = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundPage,
  },
]

export default routes
