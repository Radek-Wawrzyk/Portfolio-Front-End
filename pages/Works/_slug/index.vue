<template>
  <div class="project">
    <div class="container" v-if="portfolioProject">
      <header class="project-header">
        <div class="project-header__column">
          <h1 class="project-header__title">
            <span class="project-header__title-row">
              JimmyLion
            </span>
            <span class="project-header__title-row">
              PWA ecommerce
            </span>
          </h1>
          <h2 class="project-header__sub-title">
            Intro
          </h2>
          <p class="project-header__description">
           In 2012, two friends, Alvaro and Felipe, left their jobs in investment banking to start an MBA in New York. There they got obsessed with the start-up world and spent the first semester of school discussing business ideas.
           They noticed that socks have been generally neglected by the fashion industry.
           Hocked by the lack of well designed socks and by the unaccesible prices of good quality socks they started Jimmy Lion.
          </p>
          <h2 class="project-header__sub-title">
            Services
          </h2>
          <p class="project-header__description">
            Front End Development, Back End Development
          </p>
        </div>
        <div class="project-header__column project-header__column--right">
          <img
            class="project-header__image"
            alt=""
            src="https://www.prokhorov.design/assets/images/es-mockup-first.png"
          />
          <img
            class="project-header__image"
            alt=""
            src="https://www.prokhorov.design/assets/images/es-mockup-second.png"
          />
        </div>
      </header>

      <figure class="project-main-img">
        <img
          class="project-main-img__inner"
          alt=""
          :src="portfolioProject.mainImage.url"
        />
      </figure>

      <section class="project-description">
        <div class="project-description__content">
          <div class="project-description__column">
            <h3 class="project-description__heading">
              Challenge
            </h3>
            <p
              class="project-description__text"
            >
              After talking to the client about his vision and exploring similar apps in the store, we were focused on creating the relaxing and meditation feels in the app. Since the target audience is beginners, the design should not become too serious, on the contrary, it should give a sense of friendless, calmness and serenity, so we placed greater emphasis on the graphics that should convey the idea of the app.
            </p>
          </div>
          <div class="project-description__column">
            <h3 class="project-description__heading">
              Approach & solutions
            </h3>
            <p
              class="project-description__text"
            >
              Our main goal was to create a holistic picture, consisting of the separate of meditative sessions, which would complement each other at the expense of colors and interaction.
            </p>
          </div>
        </div>

        <ul class="project-description__info">
          <li
            class="project-description__info-item"
            v-for="info in portfolioProject.headerContent"
            :key="info.id"
          >
            <h3 class="project-description__info-heading">
              {{ info.heading }}
            </h3>
            <p class="project-description__info-value">
              {{ info.value }}
            </p>
          </li>
        </ul>

        <div class="project-additional">
          <div class="project-additional__row">
            <img 
              class="project-additional__image" 
              alt="" 
              src="https://www.prokhorov.design/assets/images/es-mockup-second.png"
            />
            <div class="project-additional__content">
              <h3 class="project-header__sub-title">
                Architecture & Technologies
              </h3>
              <p class="project-header__description">
                In 2012, two friends, Alvaro and Felipe, left their jobs in investment banking to start an MBA in New York. There they got obsessed with the start-up world and spent the first semester of school discussing business ideas.
                They noticed that socks have been generally neglected by the fashion industry.
                Hocked by the lack of well designed socks and by the unaccesible prices of good quality socks they started Jimmy Lion.
              </p>
              <ul class="project-description__technologies">
                <li
                  class="project-description__technologies-item"
                  v-for="technology in portfolioProject.technologies"
                  :key="technology"
                >
                  {{ technology }}
                </li>
            </ul>
            </div>
          </div>
          <div class="project-additional__row project-additional__row--second"> 
            <div class="project-additional__content">
              <h2 class="project-header__sub-title">
                Results
              </h2>
              <p class="project-header__description">
                In 2012, two friends, Alvaro and Felipe, left their jobs in investment banking to start an MBA in New York. There they got obsessed with the start-up world and spent the first semester of school discussing business ideas.
                They noticed that socks have been generally neglected by the fashion industry.
                Hocked by the lack of well designed socks and by the unaccesible prices of good quality socks they started Jimmy Lion.
              </p>
            </div>
            <img 
              class="project-additional__image" 
              alt="" 
              src="https://www.prokhorov.design/assets/images/es-mockup-first.png"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const ContactMe = () => import(/* webpackChunkName: "contact-me-component" */ '@/components/ContactMe/ContactMe.vue');
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');

import gql from 'graphql-tag';

export default {
  name: 'PortfolioProjectPage',
  components: {
    BaseButton,
    ContactMe,
  },
  apollo: {
    portfolioProject: {
      query: gql`query Post($slug: String!) {
        portfolioProject(filter: { slug: {
          eq: $slug
        } }) {
          id
          liveLink
          headerText
          name
          mainImage {
            url
          }
          technologies
          problemsSolutions
          useCase
          headerContent {
            heading
            value
            id
          }
        }
      }`,
      prefetch({ route }) {
        return {
          slug: route.params.slug,
        };
      },
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
