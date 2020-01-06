<template>
  <section class="featured-projects">
    <header class="featured-projects__header">
      <h2 class="featured-projects__heading">
        {{ headerText }}
      </h2>
    </header>
    <ul class="featured-projects__list">
      <li
        class="featured-project"
        v-for="project in featuredProjects"
        :key="project.id"
      >
        <a
          href="#"
          class="featured-project__link"
          :title="project.name"
          :aria-label="project.name"
        >
          <figure class="featured-project__img-wrapper">
            <img
              class="featured-project__img"
              :alt="project.name"
              :src="project.mainImage.url"
            />
          </figure>
          <h3 class="featured-project__heading">
            {{ project.name }} — {{ project.shortDescription }}
          </h3>
          <p class="featured-project__sub-heading">
            {{ project.keys }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'featured-projects',
  props: {
    headerText: {
      type: String,
      required: false,
    },
    featuredProjects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped src='./FeaturedProjects.scss' />
