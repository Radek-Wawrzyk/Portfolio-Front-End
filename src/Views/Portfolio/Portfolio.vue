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
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'default' ? 'active' : '']" @click="filter" data-category="default">All</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'Website' ? 'active' : '']" @click="filter" data-category="Website" >Website</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'Application' ? 'active' : '']" @click="filter" data-category="Application">Application</button>
        </li>
      </ul>
      <transition-group class="portfolio-list" tag="ul" name="moving-fade">
        <PortfolioItem v-bind:portfolioItem="portfolioItem" v-for="portfolioItem in portfolioItems" :key="portfolioItem.id"></PortfolioItem>
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
  computed: mapState({
    portfolioItems: state => state.portfolioItems,
    activeButton: state => state.activeButton
  }),
  methods: {
    filter(event) {
      this.$store.dispatch("filtration", event.target.getAttribute("data-category"));
    }
  }
}

</script>

<style lang="scss" src="./Portfolio.scss" scoped/>
