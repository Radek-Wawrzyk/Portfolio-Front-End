<template>
  <section class="stats-info" v-if="data">
    <h3 class="stats-info__heading">
      {{ data.heading }}
    </h3>
    <ul class="stats-info__list">
      <li 
        class="stats-info__item"
        v-for="item in data.content"
        :key="item.id"
      >
        <h4 class="stats-info__item-value">
          {{ item.value }}
        </h4>
        <span class="stats-info__item-name">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'StatsInfo',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./StatsInfo.scss" />
