<template>
  <section class="partners">
    <h3 class="partners__heading" v-if="data.heading">
      {{ data.heading }}
    </h3>
    <ul class="partners__list">
      <li 
        class="partners__item"
        v-for="partner in data.images"
        :key="partner.title"
      >
        <img 
          class="partners__item-image"
          :class="[
            partner.title === 'Kubota' || partner.title === 'Newfantastic' ? 
            'partners__item-image--invert' : false,
            partner.title === 'Websitestyle' ? 'partners__item-image--small' : false,
          ]"
          :alt="partner.title"
          :src="partner.url"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./Partners.scss" />
