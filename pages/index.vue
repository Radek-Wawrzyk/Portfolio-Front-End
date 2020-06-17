<template>
  <div class="home" v-if="isLoaded">
    <projects-carousel
      :projects="projects"
    />
  </div>
</template>

<script>
const ProjectsCarousel = () => import(/* webpackChunkName: "projects-carousel-component" */ '@/components/ProjectsCarousel/ProjectsCarousel.vue');

export default {
  name: 'HomePage',
  components: {
    ProjectsCarousel,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    isLoaded() {
      return this.$store.state.loaded;
    }
  },
};
</script>

