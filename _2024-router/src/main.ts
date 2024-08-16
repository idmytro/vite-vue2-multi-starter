import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'
import 'uno.css'

Vue.config.productionTip = false
Vue.config.devtools = true

const app = new Vue({
  router,
  render: h => h(App),
})

app.$mount('#app')
