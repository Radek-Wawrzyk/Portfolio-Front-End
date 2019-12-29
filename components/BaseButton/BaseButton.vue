<template>
  <component
    :is="componentType"
    :disabled="disabled"
    :class="classes"
    :to="mode === 'link' ? url : false"
    :aria-label="ariaText ? ariaText : false"
    :title="ariaText ? ariaText : false"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
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
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    url: {
      type: String,
      required: false,
      default: '/'
    },
    ariaText: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    componentType() {
      return this.mode === 'link' ? 'nuxt-link' : 'button';
    },
    classes() {
      return [
        this.disabled ? 'base-button--disabled' : '',
        this.type === 'primary' ? 'base-button--primary' : '',
        this.type === 'secondary' ? 'base-button--secondary' : '',
        this.type === 'text' ? 'base-button--text' : '',
        this.type === 'outline' ? 'base-button--outline' : '',
      ];
    },
  },
};
</script>

<style lang='scss' src='./BaseButton.scss' />
