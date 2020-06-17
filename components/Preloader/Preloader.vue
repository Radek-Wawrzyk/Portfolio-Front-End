<template>
  <transition name="page-fade">
    <div class="preloader" v-show="!isLoaded">
      <div class="preloader__inner">
        <img
          class="preloader__logo"
          alt="Radosław Wawrzyk logo"
          src="~/assets/images/logo.svg"
        />
        <p class="preloader__text">
          loading...
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  computed: {
    isLoaded() {
      return this.$store.state.loaded;
    },
  },
};
</script>

<style lang="scss" scoped src="./Preloader.scss" />
