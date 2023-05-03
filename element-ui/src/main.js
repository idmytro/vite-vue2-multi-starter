import Vue from 'vue';
import { Button } from 'element-ui';
import App from './App.vue';
import './style.css';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
