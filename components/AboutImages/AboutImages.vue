<template>
  <section class="about-images">
    <img 
      class="about-images__tile"
      alt=""
      :src="imageLeft"
    />
    <img 
      class="about-images__tile"
      alt=""
      :src="imageRight"
    />
  </section>
</template>

<script>
export default {
  name: 'AboutImages',
  props: {
    imageLeft: {
      type: String,
      required: true,
    },
    imageRight: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./AboutImages.scss" />
