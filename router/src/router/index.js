import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
