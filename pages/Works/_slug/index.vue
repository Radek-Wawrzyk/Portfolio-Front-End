<template>
  <div class="project" >
    <div class="container" v-if="project">
      <header class="project-header">
        <background-text opacity="0.5" class="project-header__text">
          Work
        </background-text>
        <div class="project-header__column">
          <h1 class="project-header__title">
            <span class="project-header__title-row">
              {{ project.data.heading_up[0].text }}
            </span>
            <span class="project-header__title-row">
              {{ project.data.heading_down[0].text }}
            </span>
          </h1>
          <h2 class="project-header__sub-title">
            Intro
          </h2>
          <p class="project-header__description">
            {{ project.data.intro[0].text }}
          </p>
          <h2 class="project-header__sub-title">
            Services
          </h2>
          <p class="project-header__description">
            {{ project.data.services[0].text }}
          </p>
        </div>
        <div class="project-header__column project-header__column--right">
          <img
            class="project-header__image"
            :alt="project.data.header_image_right.alt ? project.data.header_image_right.alt : ''"
            :src="project.data.header_image_right.url"
          />
        </div>
      </header>

      <figure class="project-main-img" >
        <img
          class="project-main-img__inner"
          alt=""
          :src="project.data.main_image.url"
        />
      </figure>

      <section class="project-description">
        <div class="project-description__content">
          <div class="project-description__column">
            <h3 class="project-description__heading">
              Challenge
            </h3>
            <prismic-rich-text
              :field="project.data.challenge"
              class="project-description__text prismic"
            />
          </div>
          <div class="project-description__column">
            <h3 class="project-description__heading">
              Approach & solutions
            </h3>
            <prismic-rich-text
              :field="project.data.solutions"
              class="project-description__text prismic"
            />
          </div>
        </div>

        <background-text opacity="0.5" class="project-description__text-info">
          Info
        </background-text>

        <ul class="project-description__info">
          <li class="project-description__info-item">
            <h3 class="project-description__info-heading">
              Client
            </h3>
            <p class="project-description__info-value">
              {{ project.data.info[0].client[0].text }}
            </p>
          </li>
          <li class="project-description__info-item">
            <h3 class="project-description__info-heading">
              Year
            </h3>
            <p class="project-description__info-value">
              {{ project.data.info[0].date[0].text }}
            </p>
          </li>
          <li class="project-description__info-item">
            <h3 class="project-description__info-heading">
              Categories
            </h3>
            <p class="project-description__info-value">
              {{ project.data.info[0].categories[0].text }}
            </p>
          </li>
          <li class="project-description__info-item" v-if="project.data.info[0].cooperation[0].text">
            <h3 class="project-description__info-heading">
              With Cooperation
            </h3>
            <prismic-rich-text
              :field="project.data.info[0].cooperation"
              class="project-description__info-value prismic"
            />
          </li>
        </ul>

        <div class="project-additional">
          <div class="project-additional__row">
            <img 
              class="project-additional__image project-additional__image--left" 
              :alt="project.data.additional[0].image.alt ? project.data.additional[0].image.alt : ''" 
              :src="project.data.additional[0].image.url"
            />
            <div class="project-additional__content">
              <h3 class="project-header__sub-title">
                {{ project.data.additional[0].heading[0].text }}
              </h3>
              <prismic-rich-text
                :field="project.data.additional[0].description"
                class="project-header__description prismic"
              />
            </div>
          </div>

          <div class="project-additional__row project-additional__row--second"> 
            <div class="project-additional__content">
              <h3 class="project-header__sub-title">
                {{ project.data.additional[1].heading[0].text }}
              </h3>
              <prismic-rich-text
                :field="project.data.additional[1].description"
                class="project-header__description prismic"
              />
            </div>
            <img 
              class="project-additional__image project-additional__image--right" 
              :alt="project.data.additional[1].image.alt ? project.data.additional[1].image.alt : ''" 
              :src="project.data.additional[1].image.url"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');
const BackgroundText = () => import(/* webpackChunkName: "background-text-component" */ '@/components/BackgroundText/BackgroundText.vue');

export default {
  name: 'PortfolioProjectPage',
  components: {
    BaseButton,
    BackgroundText,
  },
  computed: {
    project() {
      return this.$store.getters.getProject(this.$route.params.slug);
    },
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
