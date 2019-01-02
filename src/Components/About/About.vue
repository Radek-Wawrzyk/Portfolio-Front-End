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
              My name is Radek, and I'm Front End Developer.
            </h2>
            <p class="about-info-tile-description">
              I like to learn new things. I've connected my passion to IT with web-development and I'm doing things 
              what I really like, which is very important in my career. Everything is possible if you are very involved in it!
            </p>
          </article>
        </div>
        <div class="about-info-wrapper">
          <div class="about-info-tile"></div>
          <div class="about-info-tile">
            <a href="https://drive.google.com/open?id=1dveXPoNfUYkEvwpFge6B714JoXTwgk6a" target="_blank" aria-label="Check my CV" title="My CV">
              <h2 class="about-info-tile-title">
                Curriculum Vitae
              </h2>
              <p class="about-info-tile-description">
                You can check my CV and see my competitions!
              </p>
            </a>
          </div>
        </div>
      </section>
      <section class="about-skills">
        <header class="about-skills-header">
          <h2 class="about-skills-header-title">
            I am writing quality code <br/> which makes your website well-written.
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
            In the last 3 years of my study & work <br/> I have had the chance to learn from professional developers.
          </h4>
          <div class="about-exp-header-tile">
            <h5 class="about-exp-header-tile-title">Experience</h5>
            <p class="about-exp-header-tile-description">
              <span>24</span>
              Projects I've done to this moment!
            </p>
          </div>
        </header>
        <article class="about-exp-info">
          <h5 class="about-exp-info-title">
            I'm still learning new things and technologies all the time because it makes you a good, flexible developer. 
            I'm trying to improve my abilities and skills with every new project.
          </h5>
          <p class="about-exp-info-description">
            I have a commercial experience with coding websites. I've had an internship in a professional 
            interactive agency - 
            <a href="https://www.websitestyle.pl/" title="interactive agency - websitestyles" aria-label="interactive agency - websitestyles"> websitestyle.</a>
            where I got much more experience in my Front End development. I've learned how to work with a team and I've improved 
            my soft skills. Moreover, I've realized what is Git and how to properly work with it.
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

import Footer from "../Footer/Footer";

export default {
  name: "About",
  components: { Footer }
}

</script>

<style lang="scss" src="./About.scss" scoped />

