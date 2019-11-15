<template>
  <main class="page">
    <navigation
      @toggleMenu="toggleMenu()"
      :isMenuOpen="isMenuOpen"
    />
    <Menu
      @toggleMenu="toggleMenu()"
      :isMenuOpen="isMenuOpen"
    />
    <div class="page__content">
      <nuxt />
    </div>
  </main>
</template>

<script>
const Navigation = () => import(/* webpackChunkName: "navigation-component" */ '@/components/Navigation/Navigation.vue');
const Menu = () => import(/* webpackChunkName: "menu-component" */ '@/components/Menu/Menu.vue');

export default {
  name: 'default-layout',
  data: () => ({
    isMenuOpen: false
  }),
  components: {
    Navigation,
    Menu,
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
