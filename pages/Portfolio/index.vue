<template>
  <div class="portfolio">
    <div class="container">
      <ul class="portfolio__grid">
        <project-tile
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          class="portfolio__tile"
          :class="[
            index % 3 === 0 ? 'portfolio__tile--full' : '',
          ]"
        />
      </ul>
    </div>
  </div>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');
const ProjectTile = () => import('@/components/ProjectTile/ProjectTile.vue');

export default {
  name: 'PortfolioPage',
  components: {
    ProjectTile,
    BaseButton,
  },
  computed: {
    projects() {
      return [
        {
          id: 1,
          name: 'Jimmylion',
          slug: 'jimmylion',
          shortDescription: 'Dedicated e-commerce platform',
          keys: 'Front-End Developing, PWA, Optymalization & E-commerce',
          imageURL: 'https://images.prismic.io/jimmylion%2Faf2af393-ed2d-411f-b286-b3ded71f6740_athletic_dkt_1.jpg?auto=compress,format',
        },
        {
          id: 2,
          name: 'Kubotastore',
          slug: 'kubotastore',
          shortDescription: 'Ecommerce shop',
          keys: 'Front-End Developing, PWA, Optymalization & E-commerce',
          imageURL: 'https://wp.kubotastore.pl/wp-content/uploads/2019/09/Kubota2.jpg',
        },
        {
          id: 3,
          name: 'Sokolnicki Agency',
          slug: 'sokolnicki-agency',
          shortDescription: 'E-commerce, marketing & branding agency',
          keys: 'Front-End Developing, UI/UX, SEO optymalization',
          imageURL: 'https://radek-wawrzyk.github.io/Sokolnicki-Website/dist/img/info.jpg',
        },
        {
          id: 4,
          name: 'IT-Leaders',
          slug: 'it-leaders',
          shortDescription: 'Dedicated job platform',
          keys: 'Front-End Developing, SSR, UI/UX, Optymalization',
          imageURL: 'https://it-leaders.netlify.com/_nuxt/img/0e3b6a8.jpg',
        },
        {
          id: 5,
          name: 'Researchably',
          slug: 'researchably',
          shortDescription: 'Landing page for machine learning company',
          keys: 'Front-End Developing, UI/UX, Optymalization',
          imageURL: 'https://i.imgur.com/CqxcEoJ.png',
        },
        {
          id: 6,
          name: 'Script Studio',
          slug: 'script-studio',
          shortDescription: 'Landing page for polish software house',
          keys: 'Front-End Developing, UI/UX, SEO, SSR, Optymalization',
          imageURL: 'https://i.imgur.com/FkajFrc.png',
        },
      ];
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
