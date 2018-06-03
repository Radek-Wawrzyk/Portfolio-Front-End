<template>
  <div class="preloader" v-bind:aria-hidden="preloaderStatus"></div>
</template>

<script>

export default {
  name: "Preloader",
  props: { 
    preloaderStatus: Boolean 
  }
}

</script>

