<template>
  <div class="home">
    <projects-carousel
      :projects="featuredProjects"
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
};
</script>

