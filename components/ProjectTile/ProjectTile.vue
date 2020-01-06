<template>
  <li class="project-tile">
    <nuxt-link
      :to="`portfolio/${project.slug}`"
      class="project-tile__link"
      :title="project.name"
      :aria-label="project.name"
    >
      <figure class="project-tile__img-wrapper">
        <img
          class="project-tile__img"
          :alt="project.name"
          :src="project.mainImage.url"
        />
      </figure>
      <div class="project-tile__content">
        <h3 class="project-tile__heading">
          {{ project.name }}
        </h3>
        <p class="project-tile__sub-heading">
          {{ project.keys }}
        </p>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./ProjectTile.scss" />
