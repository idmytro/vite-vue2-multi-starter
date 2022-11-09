import Vue from 'vue';
import App from './App.vue';

import './style.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

console.log(process.env.NODE_ENV);
console.log(process.env.VITE_VAR);
console.log(process.env.VUE_APP_VAR);

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
