<template>
  <section class="projects-carousel">
    <h2
      class="projects-carousel__background-text"
      :style="{ transform: `translate(${currentSlide}00px, -50%)` }"
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
        @scroll="test()"
      >
        <div
          class="project-tile"
          :class="{'project-tile--active' : currentSlide === index }"
          v-for="(project, index) in projects"
          :key="index"
          :aria-label="project.name"
          :title="project.name"
        >
          <nuxt-link class="project-tile__heading"  :to="`/works/${project.slug}`">
            <span class="project-tile__heading-up">
              {{ project.titleUp }}
            </span>
            <span class="project-tile__heading-down">
              {{ project.titleDown }}
            </span>
          </nuxt-link>

          <figure class="project-tile__image-wrapper">
            <img
              class="project-tile__image"
              :alt="project.name"
              :src="project.mainImage.url"
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
export default {
  name: 'ProjectsCarousel',
  data: () => ({
    options: {
      duration: 700,
      perPage: 1,
      loop: true,
      easing: 'ease-out',
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
      return this.projects.length;
    },
  },
  methods: {
    test() {
      console.log('XD')
    },
    goNext() {
      this.$refs.siema.next();
    },
    goPrev() {
      this.$refs.siema.prev();
    }
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      e.keyCode === 39 ? this.goNext() : false;
      e.keyCode === 37 ? this.goPrev() : false;
    }, { passive: true });

    window.addEventListener('scroll', (e) => {
      console.log('XD');
    });

    document.querySelector('.projects-carousel').addEventListener('scroll', () => {
      console.log('xd')
    })
  },
};
</script>

<style lang="scss" src="./ProjectsCarousel.scss" />
