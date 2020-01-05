<template>
  <section class="partners">
    <h3 class="partners__heading">
      {{ data.heading }}
    </h3>
    <ul class="partners__list">
      <li 
        class="partners__item"
        v-for="partner in data.list"
        :key="partner.name"
      >
        <img 
          class="partners__item-image"
          :class="[
            partner.name === 'Kubota' || partner.name === 'Websitestyle'
            || partner.name === 'NewFantastic' ? 'partners__item-image--invert' : false,
            partner.name === 'Websitestyle' ? 'partners__item-image--small' : false,
          ]"
          :alt="partner.name"
          :src="partner.imgURL"
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
