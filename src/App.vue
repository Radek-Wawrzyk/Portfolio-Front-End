<template>
  <div class="page">
    <Navigation></Navigation>
    <transition name="fade-up" appear>
      <router-view></router-view>
    </transition>
    <Preloader v-bind:preloaderStatus="preloaderStatus"></Preloader>
    <NotificationWrapper></NotificationWrapper>
  </div>
</template>

<script>

import Navigation from "./Components/Navigation/Navigation";
import Preloader from "./Components/Preloader/Preloader";
import NotificationWrapper from './Components/NotificationWrapper/NotificationWrapper';

export default {
  name: "App",
  components: {
    Navigation,
    Preloader,
    NotificationWrapper
  },
  data: () => ({
    preloaderStatus: true
  }),
  mounted() {
    this.preloaderStatus = false;
  }
}
</script>

<style lang="scss">

@import "./Styles/Main";

</style>
