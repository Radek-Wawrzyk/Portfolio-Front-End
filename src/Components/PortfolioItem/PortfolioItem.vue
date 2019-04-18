<template>
  <li class="portfolio-list-item">
    <router-link :to="`portfolio/${portfolioItem.slug}`">
      <article class="portfolio-list-item-description">
        <p class="portfolio-list-item-text">{{portfolioItem.title}}</p>
        <p class="portfolio-list-item-text">{{portfolioItem.header}}</p>
      </article>
      <img class="portfolio-list-item-img" :src="portfolioItem.mainImg" :alt="portfolioItem.title" />
    </router-link>
  </li>
</template>

<script>

export default {
  name: "PortfolioItem",
  props: {
    portfolioItem: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss" src="./PortfolioItem.scss"/>

