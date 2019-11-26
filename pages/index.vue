<template>
  <div class="home">
    <main-header />
    <div class="container">
      <featured-projects
        headerText='Uncompromising approach to each client causes 100% satisfaction. Check my latest projects!'
        :featuredProjects="featuredProjects"
      />
      <contact-me
        title="Let's build something amazing together."
        subTitle="
          Think we might be the right friends for your next adventure?
          Take a minute, we’d love to hear about your project.
        "
        linkURL="/project-form"
        linkText="Let's do this!"
      />
    </div>
  </div>
</template>

<script>
const MainHeader = () => import(/* webpackChunkName: "main-header-component" */ '@/components/MainHeader/MainHeader.vue');
const FeaturedProjects = () => import(/* webpackChunkName: "featured-projects-component" */ '@/components/FeaturedProjects/FeaturedProjects.vue');
const ContactMe = () => import(/* webpackChunkName: "contact-me-component" */ '@/components/ContactMe/ContactMe.vue');

export default {
  name: 'home',
  components: {
    MainHeader,
    FeaturedProjects,
    ContactMe,
  },
  computed: {
    featuredProjects() {
      return [
        {
          id: 1,
          name: 'Jimmylion',
          URL: 'jimmylion',
          shortDescription: 'Dedicated e-commerce platform',
          keys: 'Front-End Developing, PWA, Optymalization & E-commerce',
          imageURL: 'https://www.rno1.com/images/6/0/7/1/7/60717db0fe8ad3b5d3d24036c987cc4750451bd4-pspring-thumb-landscape-r.jpeg',
        },
        {
          id: 2,
          name: 'Kubotastore',
          URL: 'kubotastore',
          shortDescription: 'Ecommerce shop',
          keys: 'Front-End Developing, PWA, Optymalization & E-commerce',
          imageURL: 'https://www.rno1.com/images/3/2/e/0/c/32e0c3f571f3f39589c14d08cd30b1ef7cf8950b-healto-thumbnail-landscape-r.jpeg',
        },
        {
          id: 3,
          name: 'Sokolnicki Agency',
          URL: 'sokolnicki-agency',
          shortDescription: 'E-commerce, marketing & branding agency',
          keys: 'Front-End Developing, UI/UX, SEO optymalization',
          imageURL: 'https://www.rno1.com/images/2/9/2/d/2/292d20a564f6c8230cfc0e692e467a47337971e8-spring-labs-thumbnail-portrait-r.jpeg',
        },
      ]
    }
  }
};
</script>

