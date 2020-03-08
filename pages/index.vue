<template>
  <div class="home">
    <!-- <div class="container"> -->
      <projects-carousel
        :projects="featuredProjects"
      />
    <!-- </div> -->

    <!-- <main-header />
    <div class="container">
      <stats-info :data="infoSection" />
      <featured-projects
        headerText='Featured projects'
        :featuredProjects="featuredProjects"
      />
      <contact-me
        title="Let's build something amazing together."
        subTitle="
          Think I might be the right friend for your next adventure?
          Take a minute, I’d love to hear about your project.
        "
        linkURL="/project-form"
        linkText="Let's do this!"
      />
    </div> -->
  </div>
</template>

<script>
const MainHeader = () => import(/* webpackChunkName: "main-header-component" */ '@/components/MainHeader/MainHeader.vue');
const FeaturedProjects = () => import(/* webpackChunkName: "featured-projects-component" */ '@/components/FeaturedProjects/FeaturedProjects.vue');
const ContactMe = () => import(/* webpackChunkName: "contact-me-component" */ '@/components/ContactMe/ContactMe.vue');
const StatsInfo = () => import(/* webpackChunkName: "stats-info-component" */ '@/components/StatsInfo/StatsInfo.vue');
const Partners = () => import(/* webpackChunkName: "partners-component" */ '@/components/Partners/Partners.vue');
const ProjectsCarousel = () => import(/* webpackChunkName: "projects-carousel-component" */ '@/components/ProjectsCarousel/ProjectsCarousel.vue');

import gql from 'graphql-tag';

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    FeaturedProjects,
    ContactMe,
    StatsInfo,
    Partners,
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
  async asyncData({ app }) {
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

