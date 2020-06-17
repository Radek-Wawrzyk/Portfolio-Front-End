<template>
  <section class="projects-carousel">
    <h2
      class="projects-carousel__background-text"
      :style="{ transform: `translate(${ currentSlide }00px, -50%)` }"
    >
      Works.
    </h2>
    <client-only>
      <siema
        ref="siema"
        :options="options"
        :current.sync="currentSlide"
        class="project-carousel__inner"
        auto-play
      >
        <div
          class="project-tile"
          v-for="(project, index) in projects"
          :class="{'project-tile--active' : currentSlide === index }"
          :key="project.id"
        >
          <nuxt-link 
            class="project-tile__heading" 
            :to="`/works/${project.uid}`"
            :aria-label="project.data.heading_up[0].text"
            :title="project.data.heading_up[0].text"
          >
            <span class="project-tile__heading-up">
              {{ project.data.heading_up[0].text }}
            </span>
            <span class="project-tile__heading-down">
              {{ project.data.heading_down[0].text }}
            </span>
          </nuxt-link>

          <figure class="project-tile__image-wrapper">
            <img
              class="project-tile__image"
              :alt="project.data.heading_up[0].text"
              :src="project.data.main_image.url"
            />
          </figure>
        </div>
      </siema>
      <div class="pagination">
        <transition name="pagination-fade" mode="out-in">
          <p class="pagination__index pagination__index--left" :key="currentSlide" >
            {{ currentSlide + 1 }}
          </p>
        </transition>
        <svg class="pagination__line"><defs><pattern id="dots-pattern" x="0" y="0" width="10" height="16" patternUnits="userSpaceOnUse"> <circle cx="4" cy="8" r="0.75" stroke="none" fill="#454545"></circle> </pattern> <mask id="dots-mask"> <rect x="0" y="0" width="100%" height="16" fill="white"></rect> <rect class="Timeline-dotsMask" x="-47" y="0" width="114" height="16" fill="black" style="transform: translate3d(413.592px, 0px, 0px);"></rect> </mask> </defs>  <rect width="100%" height="100%" fill="url(#dots-pattern)" mask="url(#dots-mask)"></rect> </svg>
        <p class="pagination__index pagination__index--right">
          {{ allSlides }}
        </p>
      </div>
    </client-only>
  </section>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  name: 'ProjectsCarousel',
  data: () => ({
    options: {
      duration: 700,
      perPage: 1,
      loop: true,
 
    },
    currentSlide: 0,
  }),
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  computed: {
    allSlides() {
      return this.projects ? this.projects.length : 0;
    },
  },
  methods: {
    goNext() {
      this.$refs.siema.next();
    },
    goPrev() {
      this.$refs.siema.prev();
    },
  },
  mounted() {
    const body = document.querySelector('body');
    const carousel =  document.querySelector('.projects-carousel');

    body.addEventListener('keyup', e => {
      e.keyCode === 39 ? this.goNext() : false;
      e.keyCode === 37 ? this.goPrev() : false;
    }, { passive: true });

    if (carousel) {
      carousel.addEventListener('wheel', debounce((event) => {
        var event = window.event || event;
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        delta > 0 ? this.goNext() : this.goPrev();
      }, { passive: true }, 1200));
    }
  },
};
</script>

<style lang="scss" src="./ProjectsCarousel.scss" />
