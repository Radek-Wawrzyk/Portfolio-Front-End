<template>
  <section class="portfolio-page">
    <header class="portfolio-page-header">
      <h1 class="portfolio-page-title">Title of project {{item.title}}</h1>
      <a class="portfolio-page-back" @click="$router.go(-1)" title="Back" aria-label="Back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
        <p>Back</p>
      </a>
    </header>
    <div class="portfolio-page-description">
      <p>Description: {{item.description}}</p>
      <p class="portfolio-page-description">Type of webiste (app/website): {{item.category}}</p>
    </div>
    
    <ul class="portfolio-page-technologies">
      <li class="portfolio-page-technologies-item" v-for="item in item.technologies" :key="item.id">
        {{item}}
      </li>
    </ul>
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
    const item = this.$store.state.Data.find(item => item.link === this.routerTitle);
    this.item = item;
    this.body.style.overflowY = "hidden";
  },
  destroyed: function() {
    this.body.style.overflowY = "auto";
  }
}

</script>
