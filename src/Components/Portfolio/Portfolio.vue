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
          <button class="portfolio-filter-item-button" @click="filter" data-category="Website">Website</button>
        </li>
        <li class="portfolio-filter-item">
          <button class="portfolio-filter-item-button" @click="filter" data-category="Application">Application</button>
        </li>
      </ul>
      <transition-group class="portfolio-list" tag="ul" name="moving-fade">
        <PortfolioItem v-bind:portfolioItem="portfolioItem" v-for="portfolioItem in portfolioItems" :key="portfolioItem.id"></PortfolioItem>
      </transition-group>
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
import { mapGetters } from 'vuex';

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    Footer
  },
  computed: {
    ...mapGetters(["portfolioItems"])
  },
  methods: {
    filter(event) {
      this.$store.dispatch("filtration", event.target.getAttribute("data-category"));
    }
  }
}

</script>

