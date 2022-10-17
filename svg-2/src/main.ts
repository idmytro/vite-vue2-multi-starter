import Vue from 'vue';
import App from './App.vue';

import './style.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

const modules = import.meta.glob('./assets/svg/*.svg');
Object.entries(modules).forEach(async ([, el]) => {
  if (typeof el !== 'function') return;
  await el();
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
