import Vue from 'vue'
import '@/css/reset.css'
import App from '@/App.vue'
import router from '../router/index'
import {Loading, Toast, Confirm} from '../components/index'
import common from './common'
import modal from '../pages/common/modal'

Vue.use(Toast)

Vue.use(Loading)

Vue.use(Confirm)

Vue.prototype.common = common

Vue.component('modal', modal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')