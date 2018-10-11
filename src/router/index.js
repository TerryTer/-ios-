import Vue from 'vue'
import Router from 'vue-router'

import SetPassword from '../pages/setPassword/SetPassword'
import Deblock from '../pages/deblock/Deblock'
import Link from '../pages/link/Link'
import Success from '../pages/success/Success'

Vue.use(Router)

const router = new Router({
  /*mode: 'history',*/  //需要服务端支持
  routes: [
    {
      path: '/',
      component: Link
    },
    {
      path: '/SetPassword',
      component: SetPassword
    },
    {
      path: '/Deblock',
      component: Deblock
    },
    {
      path: '/Success',
      component: Success
    }
  ]
})

export default router