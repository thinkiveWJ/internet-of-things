import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/loginOrRegister/loginOrRegister'], resolve),
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: resolve => require(['@/components/loginOrRegister/login/login'], resolve)
        },
        {
          path: '/register',
          component: resolve => require(['@/components/loginOrRegister/register/register'], resolve)
        },
        {
          path: '/register02',
          component: resolve => require(['@/components/loginOrRegister/register/register02'], resolve)
        },
        {
          path: '/register03',
          component: resolve => require(['@/components/loginOrRegister/register/register03'], resolve)
        },
        {
          path: '/register04',
          component: resolve => require(['@/components/loginOrRegister/register/register04'], resolve)
        },
        {
          path: '/register05',
          component: resolve => require(['@/components/loginOrRegister/register/register05'], resolve)
        }
      ]
    },
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
          path: 'equipment',
          component: resolve => require(['@/components/network/equipment'], resolve)
        },
        {
          path: 'gateway',
          component: resolve => require(['@/components/network/gateway'], resolve)
        },
        {
          path: 'grouping',
          component: resolve => require(['@/components/network/grouping'], resolve)
        },
        {
          path: 'internet',
          component: resolve => require(['@/components/network/internet'], resolve)
        },
        {
          path: 'power',
          component: resolve => require(['@/components/network/power'], resolve)
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
