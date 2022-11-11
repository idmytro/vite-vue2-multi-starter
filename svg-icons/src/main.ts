import Vue from 'vue';
import App from './App.vue';

import './style.css';

/* eslint-disable-next-line import/no-unresolved */
import 'virtual:svg-icons-register';

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
