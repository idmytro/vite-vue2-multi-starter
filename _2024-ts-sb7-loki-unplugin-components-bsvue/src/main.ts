import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './style.css'
import 'uno.css'

Vue.config.productionTip = false
Vue.config.devtools = true

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
})
