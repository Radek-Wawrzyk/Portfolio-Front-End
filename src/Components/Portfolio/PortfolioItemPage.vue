<template>
  <main class="project">
    <header class="project-header">
      <h1 class="project-header-title">{{item.title}}</h1>
      <p class="project-header-subtitle">{{item.category}}</p>
    </header>
    <p>{{item.description}}</p>
    <section class="project-info">
      <h2 class="project-info-title">{{item.header}}</h2>
      <div class="technology">
        <h2 class="technology-title">Technology</h2>
        <ul class="technology-list">
          <li class="technology-item" v-for="(technology, index) in item.technologies" :key="index">
            {{technology}}
          </li>
        </ul>
      </div>
    </section>
    <section class="project-description">
      <img src="https://trionndesign.com/images/work/development/berkley/slide1.jpg" width="100%">
      <p>{{item.description}}</p>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>

import Footer from "../Footer";

export default {
  name: "PortfolioItemPage",
  components: {Footer},
  component: { Footer },
  data() {
    return {
      routerTitle: this.$route.params.title,
      item: ""
    }
  },
  created: function() {
    const portfolioItem = this.$store.state.portfolioItems.find(item => item.link === this.routerTitle);
    this.item = portfolioItem;
  }
}

</script>
