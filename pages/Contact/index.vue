<template>
  <div class="page contact">
    <div class="container">
      <!-- <header class="contact-header">
        <h1 class="contact-header__title">
          Tell me about your project
        </h1>
        <p class="contact-header__description">
          Let's make something great together!
        </p>
        <base-button
          mode="link"
          url="/project-form"
          type="outline"
        >
          Project form
        </base-button>
      </header> -->
      <div class="contact-content">
        <h2 class="contact-content__title">
          Get in touch
        </h2>
        <a
          class="contact-content__link"
          aria-label=""
          title=""
          href="mailto:radekwawrzyk@gmail.com"
        >
          radekwawrzyk@gmail.com
        </a>
        <a
          class="contact-content__link"
          aria-label=""
          title=""
          href="tel:+48516649611"
        >
          +48 516 649 611
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');

export default {
  name: 'ContactPage',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
