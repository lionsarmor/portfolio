import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue') 
    },
    {
      path: "/About",
      name: "About",
      component: () => import(/* webpackChunkName: "Home" */ './views/About.vue') 
    },
    {
      path: "/Vue-page",
      name: "Vue-page",
      component: () => import(/* webpackChunkName: "Home" */ './views/Vue-page.vue') 
    },
    {
      path: "/Three-dee",
      name: "Three-dee",
      component: () => import(/* webpackChunkName: "Home" */ './views/Three-dee.vue') 
    },
    {
      path: "/Api-page",
      name: "Api-page",
      component: () => import(/* webpackChunkName: "Home" */ './views/Api-page.vue') 
    },
    {
      path: "/Electronics-page",
      name: "Electronics-page",
      component: () => import(/* webpackChunkName: "Home" */ './views/Electronics-page.vue') 
    },
    {
      path: "/Shopping-page",
      name: "Shopping-page",
      component: () => import(/* webpackChunkName: "Home" */ './views/Shopping-page.vue') 
    },
  ]
})
