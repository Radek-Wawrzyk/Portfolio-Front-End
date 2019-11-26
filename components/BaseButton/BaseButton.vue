<template functional>
  <button 
    class="base-button"
    :class="[
      props.mode === 'plain' ? 'base-button--plain' : '' ||
      props.mode === 'outline' ? 'base-button--outline' : '' ||
      props.mode === 'text' ? 'base-button--text' : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    withArrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: false,
      default: 'button'
    },
  },
};
</script>

<style lang='scss' src='./BaseButton.scss' />
