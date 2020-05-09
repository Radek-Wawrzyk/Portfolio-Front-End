<template>
  <footer class="main-footer">
    <div class="main-footer__content">
      <p class="main-footer__copyright">
        © 2018 Radosław Wawrzyk
      </p>
      <a
        class="main-footer__link"
        aria-label="Email me"
        title="Email me"
        href="mailto:radekwawrzyk@gmail.com"
      >
        radekwawrzyk@gmail.com
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  computed: {
    menuLinks() {
      return [
        {
          id: 1,
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'About me',
          path: '/about-me',
        },
        {
          id: 3,
          name: 'Portfolio',
          path: '/portfolio',
        },
        {
          id: 4,
          name: 'Contact',
          path: '/contact',
        },
        {
          id: 5,
          name: 'Hire me',
          path: '/hire-me',
        },
      ];
    },
  },
};
</script>

<style lang='scss' scoped src='./MainFooter.scss' />
