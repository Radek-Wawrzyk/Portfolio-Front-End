<template>
  <transition name="fade">
    <div class="preloader" v-if="preloaderStatus"></div>
  </transition>
</template>

<script>

export default {
  name: "Preloader",
  props: { 
    preloaderStatus: Boolean 
  }
}

</script>

<style lang="scss" src="./Preloader.scss" scoped />

