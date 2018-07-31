<template>
  <div class="page">
    <Navigation></Navigation>
    <transition name="fade-up" appear>
      <router-view></router-view>
    </transition>
    <Preloader v-bind:preloaderStatus="preloaderStatus"></Preloader>
  </div>
</template>

<script>

import Navigation from "./Components/Navigation";
import Preloader from "./Components/Preloader/Preloader";

export default {
  name: "App",
  components: {
    Navigation,
    Preloader
  },
  data() {
    return {
      preloaderStatus: false
    }
  },
  mounted: function() {
    this.preloaderStatus = true;
  }
}
</script>

<style lang="scss">

@import "./Styles/Main";

</style>
