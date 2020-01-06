<template>
  <section class="process-info">
    <h3 class="process-info__heading">
      Process of creating project
    </h3>
    <ul class="process-info__list">
      <li 
        class="process-info__item"
        v-for="item in data"
        :key="item.name"
      >
        <span class="process-info__item-step">
          {{ item.step }}
        </span>
        <h4 class="process-info__item-name">
          {{ item.name }}
        </h4>
        <span class="process-info__item-text">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProcessInfo',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped src="./ProcessInfo.scss" />
