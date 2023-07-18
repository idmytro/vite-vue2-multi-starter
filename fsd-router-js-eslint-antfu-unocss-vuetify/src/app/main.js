import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable-next-line no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
