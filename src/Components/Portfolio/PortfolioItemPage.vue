<template>
  <section class="portfolio-page">
    <header class="portfolio-page-header">
      <h1>Title of project {{item.title}}</h1>
      <p>Type of webiste (app/website): {{item.category}}</p>
    </header>
    <div class="portfolio-page-description">
      <p>Description: {{item.description}}</p>
      <ul>
        <li v-for="technology in item.technologies">
          {{technology}}
        </li>
      </ul>
    </div>

  </section>
</template>

<script>

export default {
  name: "PortfolioItemPage",
  data() {
    return {
      routerTitle: this.$route.params.title,
      item: "",
      body: document.querySelector("body")
    }
  },
  created: function() {
    const portfolioItem = this.$store.state.portfolioItems.find(item => item.link === this.routerTitle);
    this.item = portfolioItem;
  },
  destroyed: function() {
    this.body.style.overflowY = "auto";
  }
}

</script>
