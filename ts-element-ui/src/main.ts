import Vue from 'vue';
import App from './App.vue';

import './style.css';

import Button from 'element-ui/packages/button/src/button.vue';
Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.config.devtools = true;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
