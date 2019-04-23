<template>
  <li class="portfolio-list-item">
    <router-link :to="`portfolio/${project.slug}`" :aria-label="project.title" :title="project.title">
      <article class="portfolio-list-item-description">
        <p class="portfolio-list-item-text">{{project.title}}</p>
        <p class="portfolio-list-item-text">{{project.header}}</p>
      </article>
      <img class="portfolio-list-item-img" :src="project.mainImg" :alt="project.title" />
    </router-link>
  </li>
</template>

<script>

export default {
  name: "PortfolioItem",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="scss" src="./PortfolioItem.scss"/>

