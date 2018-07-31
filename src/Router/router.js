import Vue from "vue"
import Router from "vue-router"
import Home from '../Components/Home/Home.vue'
import About from '../Components/About.vue'
import Contact from '../Components/Contact/Contact.vue'
import Portfolio from '../Components/Portfolio/Portfolio.vue'
import Error from '../Components/Error.vue'
import PortfolioItemPage from '../Components//Portfolio/PortfolioItemPage.vue'

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
      name: "portfolioItemPage",
      path: "/portfolio/:title",
      component: PortfolioItemPage
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
