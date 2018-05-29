<template>
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
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
