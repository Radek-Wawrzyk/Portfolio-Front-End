<template>
  <div class="about">
    <div class="container">
      <header class="about-header">
        <background-text opacity="0.5">
          About
        </background-text>
        <div class="about-header__column">
          <h1 class="about-header__title">
            <span class="about-header__title-row">
              Radosław Wawrzyk
            </span>
            <span class="about-header__title-row">
              Front-End/UI Developer
            </span>
          </h1>
          <h2 class="about-header__sub-title">
            About me
          </h2>
          <p class="about-header__description">
            Hi my name is Radek and I'm the Front-End Developer with a terrible haircut! Despite my hair I keep attention to
            every project - I strive to make a positive impact on the product
            and the company's goals by introducing new solutions and providing a specialized
            dedicated approach to each project and challenge. I say NO to standard/boring approaches! Feel free to contact me and let's
            make Front-End great again!
          </p>
          <h2 class="about-header__sub-title">
            My stack
          </h2>
          <p class="about-header__description">
            HTML/CSS/SASS/SCSS,JS, Vue.js/Vuex, Vuestorefront, Nuxt.js, Gridsome, Node.js/Express.js, MongoDB
          </p>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
const BackgroundText = () => import(/* webpackChunkName: "background-text-component" */ '@/components/BackgroundText/BackgroundText.vue');

export default {
  name: 'AboutMePage',
  components: {
    BackgroundText,
  },
};
</script>

<style lang="scss" src="./index.scss" />
