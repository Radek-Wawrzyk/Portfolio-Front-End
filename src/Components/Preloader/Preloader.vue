<template>
  <transition name="fade">
    <div class="preloader" v-if="preloaderStatus">
      <p class="preloader-text">Loading <span>...</span></p>
    </div>
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

