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
        <li class="portfolio-filter-item" @click="activeButton='all'">
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'all' ? 'active' : '']" @click="filter" data-category="default">All</button>
        </li>
        <li class="portfolio-filter-item" @click="activeButton='website'">
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'website' ? 'active' : '']" @click="filter" data-category="Website" >Website</button>
        </li>
        <li class="portfolio-filter-item" @click="activeButton='app'">
          <button class="portfolio-filter-item-button" :class="[ activeButton === 'app' ? 'active' : '']" @click="filter" data-category="Application">Application</button>
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

import PortfolioItem from "./PortfolioItem";
import Footer from "@/Components/Footer";
import { mapGetters } from 'vuex';

export default {
  name: "Portfolio",
  components: {
    PortfolioItem,
    Footer
  },
  data() {
    return {
      activeButton: "all"
    }
  },
  computed: {
    ...mapGetters(["portfolioItems"])
  },
  methods: {
    filter(event, xd) {
      this.$store.dispatch("filtration", event.target.getAttribute("data-category"));
    }
  }
}

</script>

