<template>
  <div class="not-found">
    <div class="container">
      <h1 class="not-found__heading">
        Page not found
      </h1>
      <p class="not-found__text">
        Sorry, the page you are looking or doesn't exist (anymore).
      </p>
      <base-button
        type="outline"
        mode="link"
      >
        Go back
      </base-button>
    </div>
  </div>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');

export default {
  name: 'PageNotFound',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
