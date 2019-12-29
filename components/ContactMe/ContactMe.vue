<template>
  <section class="contact-me">
    <h4 class="contact-me__title">
      {{ title }}
    </h4>
    <p class="contact-me__sub-title">
      {{ subTitle }}
    </p>
    <base-button
      type="outline"
      mode="link"
      :ariaText="title"
      :url="linkURL"
      
    >
      {{ linkText }}
    </base-button>
  </section>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');

export default {
  name: 'contact-me',
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    linkURL: {
      type: String,
      required: false,
    },
    linkText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang='scss' src='./ContactMe.scss' />
