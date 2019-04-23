<template>
  <div class="page-content">
    <main id="portfolio">
      <header class="portfolio-header">
        <h1 class="portfolio-header-title">
          I make creative, interesting projects
        </h1>
        <p class="portfolio-header-description">
          Check out my projects below
        </p>
      </header>
      <ul class="portfolio-filter">
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" :class="[ activeCategory === 'default' ? 'active' : '']" @click="filter" data-category="default">All</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" :class="[ activeCategory === 'Website' ? 'active' : '']" @click="filter" data-category="Website" >Website</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" :class="[ activeCategory === 'Application' ? 'active' : '']" @click="filter" data-category="Application">Application</button>
        </li>
      </ul>
      <transition-group class="portfolio-list" tag="ul" name="moving-fade">
        <PortfolioItem :project="project" v-for="project in projects" :key="project.id"></PortfolioItem>
      </transition-group>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>

import PortfolioItem from "@/Components/PortfolioItem/PortfolioItem";
import Footer from "@/Components/Footer/Footer";
import { mapState } from 'vuex';

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    Footer
  },
  data: () => ({
    activeCategory: 'default'
  }),
  computed: {
    ...mapState({
      portfolioItems: state => state.portfolioItems,
    }),
    projects() {
      return this.activeCategory !== 'default' ? this.portfolioItems.filter(item => item.category === this.activeCategory) : this.portfolioItems;
    }
  },
  methods: {
    filter(event) {
      this.activeCategory = event.target.getAttribute('data-category');
    }
  }
}

</script>

<style lang="scss" src="./Portfolio.scss" scoped/>
