<template>
  <div class="page contact">
    <div class="container">
      <header class="contact-header">
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
      </header>
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
        <base-button
          type="outline"
          @click="twoSum(x, y)"
        >
          Click me
        </base-button>
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
  data: () => ({
    x: [1, 4, 5, 5, 3, 8, 9, 6],
    y: 10,
  }),
  methods: {
    twoSum(numbers, target) {
      if (numbers && target) {
        let i = 0;
        let numbersLength = numbers.length;
        let nextIndexNumber;

        for (i; i < numbersLength; i++) {
          nextIndexNumber = numbers[i + 1] != undefined ? numbers[i + 1] : numbers[0];

          if (numbers[i] + nextIndexNumber === target) {
            console.log(`${numbers[i]} + ${nextIndexNumber} = ${numbers[i] + nextIndexNumber}`);
          } else {
            console.log(`${numbers[i]} + ${nextIndexNumber} != ${numbers[i] + nextIndexNumber}`);
          }
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />
