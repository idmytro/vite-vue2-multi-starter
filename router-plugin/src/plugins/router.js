import Router from 'vue-router';
import routes from '../routes';

export const install = (vue) => {
  vue.use(Router);

  const router = new Router({
    mode: 'history',
    routes,
  });

  router.beforeEach((_to, _from, next) => {
    next();
  });

  return router;
};
