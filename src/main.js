import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import "../node_modules/jquery/dist/jquery.min.js"
import "../node_modules/popper.js/dist/popper.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
