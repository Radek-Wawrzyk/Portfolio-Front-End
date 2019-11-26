<template functional>
  <nuxt-link
    class="base-button"
    :class="[
      props.mode === 'plain' ? 'base-button--plain' : '' ||
      props.mode === 'outline' ? 'base-button--outline' : '' ||
      props.mode === 'text' ? 'base-button--text' : ''
    ]"
    :to="props.path"
    :aria-label="props.aria"
    :title="props.aria"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'base-link',
  props: {
    mode: {
      type: String,
      required: false,
      default: 'plain',
    },
    aria: {
      type: String,
      required: false,
      default: '',
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='scss' src='@/components/BaseButton/BaseButton.scss' />