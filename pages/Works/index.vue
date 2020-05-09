<template>
  <div class="home">
    <projects-carousel
      :projects="featuredProjects"
    />
  </div>
</template>

<script>
const ProjectsCarousel = () => import(/* webpackChunkName: "projects-carousel-component" */ '@/components/ProjectsCarousel/ProjectsCarousel.vue');

import gql from 'graphql-tag';

export default {
  name: 'HomePage',
  components: {
    ProjectsCarousel,
  },
  // apollo: {
  //   infoSection: gql`{
  //     infoSection {
  //       content {
  //         name
  //         id
  //         value
  //       }
  //       heading
  //     }
  //   }`,
  // },
  async asyncData({ app, redirect }) {
    redirect('/works');
    try {
      const portfolioProjects = gql`
        query {
          allPortfolioProjects(filter: {isFeatured: {eq: true}}) {
            id
            name
            titleUp
            titleDown
            slug
            isFeatured
            order
            mainImage {
              url
            }
            headerContent {
              heading
              value
              id
            }
          }
        }
      `
      const infoSection = gql`
        query {
          infoSection {
            content {
              name
              id
              value
            }
            heading
          }
        }
      `
      const projects = await app.apolloProvider.defaultClient.query({
        query: portfolioProjects,
      });
      const info = await app.apolloProvider.defaultClient.query({
        query: infoSection,
      });

      return {
        featuredProjects: projects.data.allPortfolioProjects,
        infoSection: info.data.infoSection,
      };
    } catch (err) {
      return {
        test: err
      }
    }
  },
};
</script>

