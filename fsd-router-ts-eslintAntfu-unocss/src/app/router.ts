import Vue from 'vue'
import VueRouter from 'vue-router'
import { type RouteConfig } from 'vue-router'
import homeRoutes from '../pages/home'
import notFoundRoutes from '../pages/notFound'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  ...homeRoutes,
  ...notFoundRoutes,
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
