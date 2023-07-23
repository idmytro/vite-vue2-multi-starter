import './style.css'
import 'virtual:uno.css'

import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
