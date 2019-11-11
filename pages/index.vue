<template>
  <div>
    <navigation />
  </div>
</template>

<script>
const Navigation = () => import(/* webpackChunkName: "navigation-component" */ '@/components/Navigation/Navigation.vue');

export default {
  name: 'home',
  components: {
    Navigation,
  },
};
</script>
