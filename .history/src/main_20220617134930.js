import Vue from 'vue'
import App from './App.vue'
import router from './roter'
import store from './store/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
sync(store, router)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
