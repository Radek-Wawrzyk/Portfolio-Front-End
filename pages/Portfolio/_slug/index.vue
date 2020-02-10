<template>
  <div class="project">
    <transition name="fade" mode="out-in">
       <div class="loader" v-if="!portfolioProject">
        loading...
      </div>
    </transition>
   
    <div class="container" v-if="portfolioProject">
      <header class="project-header">
        <div class="project-header__column project-header__column--left">
          <span class="project-header__sub-label">
            Case
          </span>
          <h1 class="project-header__title">
            {{ portfolioProject.name }}
          </h1>
          <p class="project-header__description">
            {{ portfolioProject.headerText }}
          </p>
          <base-button
            mode=link
            type="outline"
            :url="portfolioProject.liveLink"
          >
            Visit live
          </base-button>
        </div>
        <div class="project-header__column project-header__column--right">
          <ul class="project-header__info-list">
            <li 
              class="project-header__info-item"
              v-for="info in portfolioProject.headerContent"
              :key="info.id"
            >
              <h3 class="project-header__info-heading">
                {{ info.heading }}
              </h3>
              <p class="project-header__info-value">
                {{ info.value }}
              </p>
            </li>
          </ul>
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
        <h4 class="project-description__heading">
          Use case
        </h4>
        <p class="project-description__text" v-html="portfolioProject.useCase" />
        <h4 class="project-description__heading">
          Problems & Solutions
        </h4>
        <p class="project-description__text" v-html="portfolioProject.problemsSolutions" />
        <h4 class="project-description__heading">
          Technologies
        </h4>
        <ul class="project-description__technologies">
          <li 
            class="project-description__technologies-item"
            v-for="technology in portfolioProject.technologies"
            :key="technology"
          >
            {{ technology }}
          </li>
        </ul>
        
      </section>

      <contact-me
        title="Let's build something amazing together."
        subTitle="
          Think I might be the right friend for your next adventure?
          Take a minute, I’d love to hear about your project.
        "
        linkURL="/project-form"
        linkText="Let's do this!"
      />
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
