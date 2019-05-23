<template>
  <div class="page-content">
    <main id="about">
      <header class="about-header">
        <h1 class="about-header-title">Ambition & hard work!</h1>
        <p class="about-header-description">The best way to achieve success!</p>
      </header>
      <section class="about-info">
        <div class="about-info-wrapper">
          <article class="about-info-tile">
            <h2 class="about-info-tile-title">
              My name is Radek, and I'm the Front End Developer.
            </h2>
            <p class="about-info-tile-description">
              I like to learn new things & technologies which is just great! I've connected my passion to IT & programming in web-development, and I'm doing
              what I really like! Starting just from coding normal websites, ending to creating complex JavaScript applications. <br/><br/>
							I always keep focus on the UX/UI. In the cooperation with the graphic designer, I try to create complete and user-friendly product.
							In the end, after my work, I'm just a normal user. That's why exactly I know what I need to pay attention to. 
            </p>
          </article>
        </div>
        <div class="about-info-wrapper">
          <div class="about-info-tile"></div>
        </div>
      </section>
      <section class="about-skills">
        <header class="about-skills-header">
          <h2 class="about-skills-header-title">
            I am writing quality code <br/> which makes your website fast & optimized.
          </h2>
        </header>
        <article class="about-skills-info">
          <h3 class="about-skills-info-title">
            Creative approach is a key to impressive final results.
          </h3>
        </article>
        <ul class="about-skills-list">
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Website</h4>
            <p class="about-skills-list-item-description">
              From simple one-page websites to the advanced project with many subpages. Websites written 
              by me are based on the newest standards and ARIA accessibility which will provide good SEO. 
              I can also code your layout from graphics file - it's called PSD2HTML. Otherwise, I'll contact my 
              graphic designer and we'll create a great project together!
            </p>
          </li>
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Wordpress</h4>
            <p class="about-skills-list-item-description">
              Websites based on WordPress CMS like blogs, portals or simple one-pages. With ACF plugin 
              you will be able to manage almost all content and links on your website. I can also help you with 
              basic SEO and implement your own page layout.
            </p>
          </li>
          <li class="about-skills-list-item">
            <h4 class="about-skills-list-item-title">Application</h4>
            <p class="about-skills-list-item-description">
              In cooperation with my fellow Back End developers, we can create service or application 
              of your dreams. Selection of the newest technologies will result in high performance. 
              Moreover, we can fully customize it for your needs, without unnecessary functions and needless code!
            </p>
          </li>
        </ul>
      </section>
      <section class="about-exp">
        <header class="about-exp-header">
          <h4 class="about-exp-header-title">
            In the last 4 years of my study & work <br/> I have had the chance to learn and work with professional developers & graphic designers.
          </h4>
        </header>
        <article class="about-exp-info">
          <h5 class="about-exp-info-title">
            I've been learning <strong>Front-End</strong> for 4 years. During this time I've had plesure to work with many people, and I've gained a lof of experience in <strong>IT!</strong>
          </h5>
          <p class="about-exp-info-description">
            I have a commercial experience working as Front End developer. At present I work in the polish e-commerce software house - 
						<a href="https://www.newfantastic.com/" title="newfantastic" aria-label="newfantastic."> newfantastic.</a>
						I'm in charge of <strong>UX/UI</strong> of e-commerce shops or applications based on <strong>Vue.js</strong>, <strong>Vuestorefront</strong>, & <strong>Nuxt.js</strong>.
						We design and develop Digital Products for all industries, combining the best of Modern Web Technologies, Typography Principles and Data Driven UX Design.<br/><br/>

						At the beginning of the 2019 year I took part in the project of creating browser game - 
						<a href="https://footballteam.pl/" title="https://footballteam.pl/" aria-label="https://footballteam.pl/"> footballteam</a>.
						I was in charge of game components, code refactor and adding new modules/features. Games is based on the <strong>SPA</strong> architecture - <strong>Vue.js framework</strong><br/><br/>

						Also I've worked in the professional interactive agency -
            <a href="https://www.websitestyle.pl/" title="interactive agency - websitestyles" aria-label="interactive agency - websitestyles"> websitestyle</a>.
            Where I got much more experience in my soft skills. I've learned how to work and talk with clients, and learned about <strong>SEO</strong>.
          </p>
          <router-link to="/portfolio" title="my work" aria-label="My work" class="about-exp-info-link">
            See my work
            <svg data-v-ea9252f8="" enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.213 476.213" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon data-v-ea9252f8="" points="345.61 107.5 324.39 128.71 418.79 223.11 0 223.11 0 253.11 418.79 253.11 324.39 347.5 345.61 368.71 476.21 238.11"></polygon></svg>
          </router-link>
        </article>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>

import Footer from "@/Components/Footer/Footer";

export default {
  name: "About",
  components: { Footer }
};

</script>

<style lang="scss" src="./About.scss" scoped />

