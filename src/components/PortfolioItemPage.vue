<template>
  <section class="portfolio-page">
    <header class="portfolio-page-header">
      <img>
      <h1>Title of project {{item.title}}</h1>
      <p>Type of webiste (app/website): {{item.category}}</p>
    </header>
    <div class="portfolio-page-description">
      <p>Description: {{item.description}}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: "PortfolioItemPage",
  data() {
    return {
      routerTitle: this.$route.params.title,
      item: ""
    }
  },
  created: function() {
    const item = this.$store.state.Data.find(e => e.link === this.routerTitle);
    this.item = item;
  } 
}

</script>
