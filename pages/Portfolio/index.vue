<template>
  <div class="portfolio">
    <div class="container">
      <ul class="portfolio__grid">
        <project-tile
          v-for="(project, index) in allPortfolioProjects"
          :key="project.id"
          :project="project"
          class="portfolio__tile"
          :class="[
            index % 3 === 0 ? 'portfolio__tile--full' : '',
          ]"
        />
      </ul>
    </div>
        <transition name="fade" mode="out-in">
      <div v-if="$apollo.loading" class="loader" style="transition-delay: 0.5s">
      loading...
      </div>
    </transition>
  </div>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');
const ProjectTile = () => import('@/components/ProjectTile/ProjectTile.vue');

import gql from 'graphql-tag';

export default {
  name: 'PortfolioPage',
  components: {
    ProjectTile,
    BaseButton,
  },
  apollo: {
    allPortfolioProjects: gql`{
      allPortfolioProjects(orderBy: order_ASC) {
        id
        name
        slug
        isFeatured
        order
        mainImage {
          url
        }
      }
    }`,
  },
};
</script>

<style lang="scss" src="./index.scss" />
