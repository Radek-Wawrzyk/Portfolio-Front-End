<template>
  <section class="contact-me">
    <h4 class="contact-me__title">
      {{ title }}
    </h4>
    <p class="contact-me__sub-title">
      {{ subTitle }}
    </p>
    <base-link
      mode="outline"
      :aria="title"
      :path="linkURL"
    >
      {{ linkText }}
    </base-link>
  </section>
</template>

<script>
const BaseLink = () => import('@/components/BaseLink/BaseLink.vue');

export default {
  name: 'contact-me',
  components: {
    BaseLink,
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
