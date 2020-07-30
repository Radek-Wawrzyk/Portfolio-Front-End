<template>
  <main class="page">
    <navigation
      @toggleMenu="toggleMenu()"
      :isMenuOpen="isMenuOpen"
    />
    <main-menu
      @toggleMenu="toggleMenu()"
      :isMenuOpen="isMenuOpen"
    />
    <div
      class="page__content"
      :class="{'page__content--active' : isMenuOpen }"
    >
      <nuxt />
    </div>

    <client-only>
      <!-- <div class="cursor" ref="cursor" /> -->
    </client-only>

    <!-- <transition name="page-fade"> -->
      <preloader />
    <!-- </transition> -->
    <main-footer />
  </main>
</template>

<script>
const Navigation = () => import(/* webpackChunkName: "navigation-component" */ '@/components/Navigation/Navigation.vue');
const MainMenu = () => import(/* webpackChunkName: "main-menu-component" */ '@/components/MainMenu/MainMenu.vue');
const MainFooter = () => import(/* webpackChunkName: "main-footer-component" */ '@/components/MainFooter/MainFooter.vue');
const Preloader = () => import(/* webpackChunkName: "preloader-component" */ '@/components/Preloader/Preloader.vue');

import AOS from 'aos';

export default {
  name: 'default-layout',
  data: () => ({
    isMenuOpen: false,
  }),
  components: {
    Navigation,
    MainMenu,
    MainFooter,
    Preloader,
  },
  computed: {
    isLoaded() {
      return this.$store.state.loaded;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    async fetchData() {
      try {
        const { results } = await this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'work')
        );
        this.$store.dispatch('fetchData', results);
      } catch (err) {
        console.log(err);
      }
    },
    // cursorListener() {
    //   window.addEventListener('mousemove', (e) => {
    //     this.$refs.cursor.style.top = `${e.pageY}px`;
    //     this.$refs.cursor.style.left = `${e.pageX}px`;
    //   });

    //   document.querySelectorAll('a, button').forEach(link => {
    //     link.addEventListener('mouseleave', () => {
    //       this.$refs.cursor.classList.remove('cursor--on-link');

    //     });
    //     link.addEventListener('mouseover', () => {
    //       this.$refs.cursor.classList.add('cursor--on-link');
    //       console.log('Found element!')
    //     });
    //   });
    // },
  },
  watch: {
    isMenuOpen() {
      const body = document.querySelector('body');

      if (this.isMenuOpen) {
        body.classList.add('no-scroll');
      } else {
        setTimeout(() => {
          body.classList.remove('no-scroll');
        }, 700);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
