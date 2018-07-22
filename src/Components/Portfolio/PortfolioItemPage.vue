<template>
  <div class="project">
    <header class="project-header" :style="{backgroundImage: 'url('+ item.img +')'}">
      <div class="project-header-description" >
        <h1 class="project-header-title">{{item.title}}</h1>
        <p class="project-header-subtitle">Category - {{item.category}}</p>
        <p class="project-header-subtitle">
          <a href="#">
            Visit live
            <svg enable-background="new 0 0 54.971 54.971" version="1.1" viewBox="0 0 54.971 54.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m51.173 3.801c-5.068-5.068-13.315-5.066-18.384 0l-9.192 9.192c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l9.192-9.192c1.691-1.69 3.951-2.622 6.363-2.622 2.413 0 4.673 0.932 6.364 2.623s2.623 3.951 2.623 6.364c0 2.412-0.932 4.672-2.623 6.363l-12.019 12.022c-3.51 3.508-9.219 3.508-12.729 0-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.048 0 2.828c2.534 2.534 5.863 3.801 9.192 3.801s6.658-1.267 9.192-3.801l12.021-12.021c2.447-2.446 3.795-5.711 3.795-9.192 0-3.482-1.348-6.746-3.795-9.193z"/>
            <path d="m27.132 40.57l-7.778 7.778c-1.691 1.691-3.951 2.623-6.364 2.623-2.412 0-4.673-0.932-6.364-2.623-3.509-3.509-3.509-9.219 0-12.728l11.314-11.314c1.691-1.69 3.951-2.622 6.364-2.622 2.412 0 4.672 0.932 6.363 2.622 0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828c-5.067-5.067-13.314-5.068-18.384 0l-11.314 11.315c-2.446 2.446-3.794 5.711-3.794 9.192 0 3.48 1.348 6.745 3.795 9.191 2.446 2.447 5.711 3.795 9.191 3.795 3.481 0 6.746-1.348 9.192-3.795l7.778-7.778c0.781-0.781 0.781-2.047 0-2.828s-2.046-0.781-2.827 0z"/>
          </svg>
          </a>
        </p>
      </div>
    </header>
    <main id="project">
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
      </section>
      <Footer></Footer>
    </main>
  </div>
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
