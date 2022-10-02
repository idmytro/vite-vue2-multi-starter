import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
