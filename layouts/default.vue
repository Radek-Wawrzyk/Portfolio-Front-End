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
    <div class="page__content">
      <nuxt />
    </div>
    <div class="lines">
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
      <span class="lines__item"/>
    </div>
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
    }
  }
};
</script>
