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

    <div class="lines">
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
    </div>
    <div class="cursor" ref="cursor" />
    <main-footer />
  </main>
</template>

<script>
const Navigation = () => import(/* webpackChunkName: "navigation-component" */ '@/components/Navigation/Navigation.vue');
const MainMenu = () => import(/* webpackChunkName: "main-menu-component" */ '@/components/MainMenu/MainMenu.vue');
const MainFooter = () => import(/* webpackChunkName: "main-footer-component" */ '@/components/MainFooter/MainFooter.vue');

export default {
  name: 'default-layout',
  data: () => ({
    isMenuOpen: false
  }),
  components: {
    Navigation,
    MainMenu,
    MainFooter,
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  watch: {
    isMenuOpen(o, n) {
      const body = document.querySelector('body');

      if (this.isMenuOpen) {
        body.classList.add('no-scroll');
      } else {
        setTimeout(() => {
          body.classList.remove('no-scroll');
        }, 700);

      }
    }
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.$refs.cursor.style.top = `${e.pageY}px`;
      this.$refs.cursor.style.left = `${e.pageX}px`;
    });

    document.querySelectorAll('a, button, nuxt-link, .project-tile__heading').forEach(link => {
      link.addEventListener('mouseleave', () => {
        this.$refs.cursor.classList.remove('cursor--on-link');
      });
      link.addEventListener('mouseover', () => {
        this.$refs.cursor.classList.add('cursor--on-link');
      });
    });

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
      transform: translate3d(0, 100vh, 0);
    }
  }
</style>
