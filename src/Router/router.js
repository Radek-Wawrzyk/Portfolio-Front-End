import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Views/Home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../Views/About/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../Views/Contact/Contact.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../Views/Portfolio/Portfolio.vue')
    },
    {
      name: "portfolioProject",
      path: "/portfolio/:slug",
      props: true,
      component: () => import('../Views/PortfolioProject/PortfolioProject.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import('../Views/Error/Error.vue')
    }
  ]
})
