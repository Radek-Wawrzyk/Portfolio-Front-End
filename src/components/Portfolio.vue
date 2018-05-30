<template>
  <main id="portfolio">
    <header class="portfolio-header">
      <h1 class="portfolio-header-title">
        I try to do creative & <br/>interesting projects
      </h1>
      <p class="portfolio-header-description">
        Check my work below.
      </p>
    </header>
    <ul class="portfolio-filter">
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button" data-category="default">All</button>
      </li>
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button"  data-category="website">Website</button>
      </li>
      <li class="portfolio-filter-item">
        <button class="portfolio-filter-item-button"  data-category="app">Application</button>
      </li>
    </ul>
    <ul class="portfolio-list">
      <PortfolioItem v-bind:portfolioItem="portfolioItem" v-for="portfolioItem in portfolioItems" :key="portfolioItem.id"></PortfolioItem>
    </ul>
    <transition name="fade-left">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </main>
</template>

<script>

import PortfolioItem from "./PortfolioItem";
import Footer from "./Footer";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    Footer
  },
  computed: {
    portfolioItems() {
      return this.$store.state.Data;
    }
  }
}

</script>

