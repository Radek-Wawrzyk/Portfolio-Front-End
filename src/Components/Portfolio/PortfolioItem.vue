<template>
  <li class="portfolio-list-item">
    <router-link v-bind:to="'portfolio/'+portfolioItem.link">
      <article class="portfolio-list-item-description">
        <p class="portfolio-list-item-text">{{portfolioItem.title}}</p>
        <p class="portfolio-list-item-text">{{portfolioItem.description}}</p>
      </article>
      <img class="portfolio-list-item-img" v-bind:src="portfolioItem.img" :alt="portfolioItem.title" />
    </router-link>
  </li>
</template>

<script>

export default {
  name: "PortfolioItem",
  props: ["portfolioItem"],
}

</script>

