<template>
  <div class="page-content">
    <main id="portfolio">
      <header class="portfolio-header">
        <h1 class="portfolio-header-title">
          I am trying to make creative & <br/> interesting websites
        </h1>
        <p class="portfolio-header-description">
          Check my projects below
        </p>
      </header>
      <ul class="portfolio-filter">
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" @click="filter" data-category="default">All</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" @click="filter" data-category="website">Website</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" @click="filter" data-category="app">Application</button>
        </li>
      </ul>
      <ul class="portfolio-list">
        <PortfolioItem v-bind:portfolioItem="portfolioItem" v-for="portfolioItem in data" :key="portfolioItem.id"></PortfolioItem>
      </ul>
      <transition name="fade-left">
        <router-view></router-view>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>

import PortfolioItem from "./PortfolioItem";
import Footer from "@/Components/Footer";

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    Footer
  },
  data() {
    return {
      data: this.$store.state.Data
    }
  },
  /*
  computed: {
    portfolioItems() {
      return this.$store.state.Data;
    }
  },
  */
  methods: {
    filter(e) {
      let category = e.target.getAttribute("data-category");

      switch (category) {
        case "website": {
          this.data = this.$store.state.Data.filter(item => item.category === "website");
          break;
        }
        case "app": {
          this.data = this.$store.state.Data.filter(item => item.category === "app");
          break;
        }
        default: {
          this.data = this.$store.state.Data
          break;
        }
      }
    }
  }
}

</script>

