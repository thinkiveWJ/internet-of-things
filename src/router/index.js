import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/logined',
      component: resolve => require(['@/components/menus/menus'], resolve),
      redirect: '/logined/overview',
      children: [
        {
          path: 'overview',
          component: resolve => require(['@/components/overview/overview'], resolve)
        },
        {
          path: 'network',
          component: resolve => require(['@/components/network/network'], resolve)
        }
      ]
    }
  ]
})
