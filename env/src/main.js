import Vue from 'vue';
import App from './App.vue';

import './style.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

console.log(process.env);

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
