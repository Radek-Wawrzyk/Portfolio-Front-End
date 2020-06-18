<template>
  <div 
    class="background-text"
    :class="[
      align === 'left' ? 'background-text--left' : '',
      align === 'right' ? 'background-text--right' : '',

    ]"
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
  },
};
</script>

<style lang='scss' src='./BackgroundText.scss' />