<template>
  <nav 
    class="navigation"
    :class="{'navigation--active' : isMenuOpen}"
  >
    <div class="navigation__content">
      <div class="navigation__column">
        <nuxt-link
          to="/"
          aria-label="Home"
          title="Home"
          class="navigation__logo-link"
        >
          <img
            src="~/assets/images/logo.svg"
            alt="Radek Wawrzyk"
            class="navigation__logo"
          />
        </nuxt-link>
      </div>
      <div class="navigation__column">
        <button
          class="navigation__hamburger"
          :class="{'navigation__hamburger--active' : isMenuOpen}"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-label="Open Menu"
          aria-controls="menu"
          title="Open Menu"
          @click="toggleMenu()"
        >
          <transition name="fade">
            <span class="navigation__hamburger-text" :key="isMenuOpen">
              {{ isMenuOpen ? 'Close' : 'Menu' }}
            </span>
          </transition>
          <span class="navigation__hamburger-box">
            <span class="navigation__hamburger-line"></span>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>

<style lang='scss' scoped src='./Navigation.scss' />
