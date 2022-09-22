import Vue from 'vue';
import App from './App.vue';
import { filename } from './utils/string';

import './style.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = new Vue({
  ...Object.fromEntries(
    Object.entries(
      import.meta.glob('./plugins/*.js', {
        eager: true,
      }),
    )
      .map(([k, v]) => [filename(k), v.install?.(Vue)])
      .filter((entry) => entry[1]),
  ),
  render: (h) => h(App),
});

app.$mount('#app');
