<template>
  <div>
    <main-header />
  </div>
</template>

<script>
const MainHeader = () => import(/* webpackChunkName: "main-header-component" */ '@/components/MainHeader/MainHeader.vue');

export default {
  name: 'home',
  components: {
    MainHeader,
  },
};
</script>

