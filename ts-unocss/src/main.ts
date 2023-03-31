import Vue from 'vue';
import App from './App.vue';

import './style.css';
import 'uno.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
