<template>
  <div 
    class="background-text"
    :class="[
      align === 'left' ? 'background-text--left' : '',
      align === 'right' ? 'background-text--right' : '',
    ]"
    :style="{ opacity: opacity }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackgroundText',
  props: {
    align: {
      type: String,
      required: false,
      default: 'center',
    },
    opacity: {
      type: [String, Number],
      required: false,
    }
  },
};
</script>

<style lang='scss' src='./BackgroundText.scss' />