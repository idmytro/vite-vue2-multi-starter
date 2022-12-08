import Vue from 'vue';
import App from './App.vue';

import './style.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
