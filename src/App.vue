<template>
  <div class="page">
    <Navigation></Navigation>
    <transition name="fade-up" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Navigation from "./Components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

@import "./Styles/Main";

</style>
