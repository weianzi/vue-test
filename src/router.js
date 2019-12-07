import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () =>
        import(/* webpackChunkName: "chart" */ './views/Chart/Index.vue')
    },

    {
      path: '/chart/ring',
      name: 'chartRing',
      component: () =>
        import(/* webpackChunkName: "chart" */ './views/Chart/Ring.vue')
    },

    {
      path: '/table',
      name: 'table',
      component: () =>
        import(/* webpackChunkName: "table" */ './views/Table.vue')
    },
    // {
    //   path: '/code',
    //   name: 'code',
    //   component: () =>
    //     import(/* webpackChunkName: "chart" */ './views/CodeEditor')
    // },
    // {
    //   path: '/brace',
    //   name: 'brace',
    //   component: () =>
    //     import(/* webpackChunkName: "brace" */ './views/Brace')
    // },
    {
      path: '/ace',
      name: 'ace',
      component: () =>
        import(/* webpackChunkName: "ace" */ './views/Ace')
    }
    // {
    //   path: '/earth',
    //   name: 'earth',
    //   component: () => import(/* webpackChunkName: "earth" */ './views/earth/index.vue')
    // }
  ]
})
