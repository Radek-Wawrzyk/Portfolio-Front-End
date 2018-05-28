import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Components/Home.vue'
import About from '../Components/About.vue'
import Contact from '../Components/Contact.vue'
import Portfolio from '../Components/Portfolio.vue'
import Error from '../Components/Error.vue'
import PortfolioItem from '../Components/PortfolioItem.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
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
      children: [
        {
          path: ":title",
          comments: PortfolioItem
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
