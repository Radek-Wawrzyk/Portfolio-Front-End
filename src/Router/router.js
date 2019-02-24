import Vue from "vue";
import Router from "vue-router";
import Home from '../Views/Home/Home.vue';
import About from '../Components/About/About.vue';
import Contact from '../Views/Contact/Contact.vue';
import Portfolio from '../Views/Portfolio/Portfolio.vue';
import Error from '../Views/Error/Error.vue';
import PortfolioProject from '../Views/PortfolioProject/PortfolioProject.vue';

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
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      name: "portfolioProject",
      path: "/portfolio/:title",
      component: PortfolioProject
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
