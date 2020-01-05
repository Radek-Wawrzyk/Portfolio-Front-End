<template>
  <div class="about">
    <div class="container">
      <stats-info :data="infoData" />
      <process-info :data="processData" />
      <about-images 
        imageLeft="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        imageRight="https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
      />
      <partners
        :data="partners"
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
    </div>
  </div>
</template>

<script>
const ContactMe = () => import(/* webpackChunkName: "contact-me-component" */ '@/components/ContactMe/ContactMe.vue');
const ProcessInfo = () => import(/* webpackChunkName: "process-info-component" */ '@/components/ProcessInfo/ProcessInfo.vue');
const StatsInfo = () => import(/* webpackChunkName: "stats-info-component" */ '@/components/StatsInfo/StatsInfo.vue');
const AboutImages = () => import(/* webpackChunkName: "about-images-component" */ '@/components/AboutImages/AboutImages.vue');
const Partners = () => import(/* webpackChunkName: "partners-component" */ '@/components/Partners/Partners.vue');

export default {
  name: 'AboutMePage',
  components: {
    ContactMe,
    ProcessInfo,
    StatsInfo,
    AboutImages,
    Partners,
  },
  computed: {
    processData() {
      return {
        heading: 'Process of creating project',
        stages: [
          {
            name: 'Strategy',
            text: 'Based on clear, verifiable insights I create successful digital solutions.',
            step: '01.',
          },
          {
            name: 'Design',
            text: 'With cooperation I design an effective interface, starting from the user’s experience and perceptions. ',
            step: '02.',
          },
          {
            name: 'Developemnt',
            text: 'I ensure that the ‘back-end’ & ‘front-end’ of the digital product performs to perfection.',
            step: '03.',
          },
          {
            name: 'Partnership',
            text: 'I further our quest for the optimum digital experience, to enable the user to convert (rapidly) and enjoy that pleasurable brand experience.',
            step: '04.',
          },
        ],
      };
    },
    infoData() {
      return {
        heading: 'Committed to excellence',
        list: [
          {
            name: 'Projects completed',
            value: '20+',
          },
          {
            name: 'Github contributions',
            value: '+1000',
          },
          {
            name: 'Years in business',
            value: '4+',
          },
        ],
      };
    },
    partners() {
      return {
        heading: 'I have cooperated with small & big companies',
        list: [
          {
          name: 'NewFantastic',
          imgURL: 'https://www.newfantastic.com/img/brand/newfantasticLogo.png',
          },
          {
            name: 'GPMD',
            imgURL: 'https://www.gpmd.co.uk/assets/images/gpmd-logo--light.svg',
          },
          {
            name: 'IT-Leaders',
            imgURL: 'https://it-leaders.netlify.com/_nuxt/img/c97b174.png',
          },
          {
            name: 'Websitestyle',
            imgURL: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 138.9 121.9'%3E%3Cg%3E%3Cpolygon points='66.9,6 60.3,6 41.4,64.9 24,6 13.2,6 36.4,80.1 44.9,80.1 63.3,24.1 71.2,49.2 76.7,37.8 '%3E%3C/polygon%3E%3C/g%3E%3Cg%3E%3Cpath d='M115.7,39v10.7l9.3-3v-1.5c0-6-1.1-10.2-3.3-12.7c-2.2-2.4-6.2-3.6-12-3.6h-19L85.8,39H115.7z'%3E%3C/path%3E%3Cpath d='M122.5,63.4c-2.1-2.4-6.1-3.6-11.9-3.6H75.9l-5,10.5c1.3,0.2,2.6,0.2,4.2,0.2h40.9v22.3H67.4V80.8l-1.9,0.5l-6.9,14.4 c0.5,1.5,1.1,2.7,1.9,3.6c2.1,2.5,6.2,3.7,12.1,3.7h38c5.9,0,9.9-1.2,12-3.6c2.1-2.4,3.1-7.1,3.1-13.9v-8.3 C125.7,70.4,124.7,65.8,122.5,63.4z'%3E%3C/path%3E%3C/g%3E%3Crect x='70.2' y='-3.3' transform='matrix(0.9059 0.4234 -0.4234 0.9059 32.6081 -24.2437)' width='1.4' height='129.2'%3E%3C/rect%3E%3C/svg%3E",
          },
          {
            name: 'Kubota',
            imgURL: 'https://www.kubotastore.pl/assets/logo/full.png',
          },
          {
            name: 'Jimmylion',
            imgURL: 'https://www.jimmylion.com/skin/frontend/jimmylion/default/images/jimmylion-logo.svg',
          },
          {
            name: 'Sokolnicki',
            imgURL: "data:image/svg+xml,%3Csvg viewBox='0 0 534.314 188.909' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 534.314 188.909' height='188.91px' version='1.1' width='534.31px' xml:space='preserve'%3E%3Cpath d='m112.48 65.008s-9.698-1.204-13.804-1.204c-8.069 0-12.601 2.832-12.601 9.91 0 8.636 4.389 9.697 13.309 11.113 9.344 1.486 14.439 3.61 14.439 12.529 0 11.042-5.238 14.865-15.006 14.865-5.309 0-15.148-1.133-15.148-1.133l0.283-2.478s9.769 1.204 14.795 1.204c8.068 0 12.387-3.398 12.387-12.246 0-7.22-3.681-8.848-12.387-10.193-9.698-1.487-15.361-3.115-15.361-13.52 0-9.131 5.875-12.458 15.29-12.458 5.45 0 14.086 1.133 14.086 1.133l-0.282 2.478z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m121.83 87.164c0-16.139 3.822-25.625 18.971-25.625s18.971 9.344 18.971 25.625c0 17.13-3.752 25.2-18.971 25.2-15.289 0-18.971-8.778-18.971-25.2zm35.252 0c0-14.653-2.974-23.218-16.281-23.218-13.449 0-16.281 8.423-16.281 23.218 0 14.865 2.619 22.793 16.281 22.793s16.281-7.22 16.281-22.793z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m183.13 88.438h-9.272v23.289h-2.549v-49.55h2.549v23.854h9.131l15.572-23.854h3.044l-16.351 24.917 17.483 24.633h-3.257l-16.35-23.289z' fill='%235BC5F2'%3E%3C/path%3E%3Cpath d='m210.53 87.164c0-16.139 3.822-25.625 18.971-25.625s18.971 9.344 18.971 25.625c0 17.13-3.752 25.2-18.971 25.2-15.289 0-18.971-8.778-18.971-25.2zm35.252 0c0-14.653-2.973-23.218-16.281-23.218-13.449 0-16.281 8.423-16.281 23.218 0 14.865 2.619 22.793 16.281 22.793s16.281-7.22 16.281-22.793z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m260.01 111.73v-49.55h2.549v47.143h24.137v2.407h-26.686z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m297.53 62.177h6.018l23.57 47.143h1.912v-47.143h2.549v49.55h-6.018l-23.643-47.143h-1.84v47.143h-2.549v-49.55z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m345.6 62.177h2.549v49.55h-2.549v-49.55z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m389.7 110.95s-7.504 1.416-13.096 1.416c-14.582 0-17.625-9.485-17.625-25.2 0-15.431 2.549-25.625 17.625-25.625 6.725 0 13.096 1.345 13.096 1.345l-0.213 2.477s-7.148-1.416-12.883-1.416c-13.307 0-14.936 9.131-14.936 23.218 0 14.157 1.912 22.793 14.936 22.793 5.025 0 12.883-1.416 12.883-1.416l0.213 2.408z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m412 88.438h-9.273v23.289h-2.547v-49.55h2.547v23.854h9.133l15.572-23.854h3.043l-16.352 24.917 17.484 24.633h-3.256l-16.351-23.289z' fill='%232D2E83'%3E%3C/path%3E%3Cpath d='m441.87 62.177h2.547v49.55h-2.547v-49.55z' fill='%232D2E83'%3E%3C/path%3E%3Cline fill='%235BC5F2' stroke='%235BC5F2' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' x1='80.158' x2='454.16' y1='126.51' y2='126.51'%3E%3C/line%3E%3C/svg%3E",
          },
          {
            name: 'Footballteam',
            imgURL: "https://footballteam.pl/images/logo-mini.png",
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
