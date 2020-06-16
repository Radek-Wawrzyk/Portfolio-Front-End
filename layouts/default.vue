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
      <div class="cursor" ref="cursor" />
    </client-only>
    
    <transition name="fade" mode="out-in">
      <preloader v-if="$apollo.loading" />
    </transition>
    <main-footer />
  </main>
</template>

<script>
const Navigation = () => import(/* webpackChunkName: "navigation-component" */ '@/components/Navigation/Navigation.vue');
const MainMenu = () => import(/* webpackChunkName: "main-menu-component" */ '@/components/MainMenu/MainMenu.vue');
const MainFooter = () => import(/* webpackChunkName: "main-footer-component" */ '@/components/MainFooter/MainFooter.vue');
const Preloader = () => import(/* webpackChunkName: "preloader-component" */ '@/components/Preloader/Preloader.vue');

import gql from 'graphql-tag';

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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
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
    allPortfolioProjects() {
      this.allPortfolioProjects && this.allPortfolioProjects.length ? console.log('pobrane!') : false;
    }
  },
  apollo: {
    allPortfolioProjects: gql`{
      allPortfolioProjects(filter: {isFeatured: {eq: true}}) {
        id
        name
        titleUp
        titleDown
        slug
        isFeatured
        order
        mainImage {
          url
        }
        headerContent {
          heading
          value
          id
        }
      },
    }`,
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.$refs.cursor.style.top = `${e.pageY}px`;
      this.$refs.cursor.style.left = `${e.pageX}px`;
    });

    document.querySelectorAll('a, button, .nuxt-link, img', '.project-tile__heading').forEach(link => {
      link.addEventListener('mouseleave', () => {
        this.$refs.cursor.classList.remove('cursor--on-link');

      });
      link.addEventListener('mouseover', () => {
        this.$refs.cursor.classList.add('cursor--on-link');
        console.log('xd')
      });
    });
  },
  created() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style lang="scss">
  body {
    overflow-x: hidden;

    &.no-scroll {
      overflow: hidden;
    }
  }

  .page__content {
    transition: all 0.7s;
    height: 100vh;

    &--active {
      transition: all 0.7s;
      transform: translate3d(0, 100vh, 0);
      opacity: 0;
    }
  }
</style>
