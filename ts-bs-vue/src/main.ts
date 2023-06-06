import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false;
Vue.config.devtools = true;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
