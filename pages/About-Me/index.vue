<template>
  <div class="about">
    <div class="container">
      <stats-info :data="infoSection" />
      <process-info :data="allProcesses" />
      <about-images 
        imageLeft="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        imageRight="https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
      />
      <partners
        :data="allPartners[0]"
        v-if="allPartners"
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

import gql from 'graphql-tag';

export default {
  name: 'AboutMePage',
  components: {
    ContactMe,
    ProcessInfo,
    StatsInfo,
    AboutImages,
    Partners,
  },
  apollo: {
    allPartners: gql`{
      allPartners {
        heading
        images {
          id
          url
          title
        }
      }
    }`,
    allProcesses: gql`{
      allProcesses {
        id
        name
        step
        text
      }
    }`,
    infoSection: gql`{
      infoSection {
        content {
          name
          id
          value
        }
        heading
      }
    }`
  },
};
</script>

<style lang="scss" src="./index.scss" />
