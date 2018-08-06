<template>
  <div class="page-content">
    <header class="hero">
      <div class="hero-description">
        <h1 class="hero-description-title">
          Radek Wawrzyk
        </h1>
        <p class="hero-description-text">
          Tell me about your dream website and <router-link to="/Contact" class="hero-description-link" aria-label="hire me" title="hire me">hire me.</router-link>
        </p>
      </div>
    </header>
    <main id="home">
      <section class="projects">
        <h2 class="projects-title">Featured projects</h2>
        <ul class="projects-list">
          <li class="project-item">
            <router-link to="portfolio/sokolnicki-agency" aria-label="Sokolnicki agency">
              <h3 class="project-item-title">Sokolnicki</h3>
              <p class="project-item-description">Sokolnicki is a creative agency Public Relations</p>
            </router-link>
          </li>
           <li class="project-item">
            <router-link to="portfolio/bossbus" aria-label="Bossbus deliver company">
              <h3 class="project-item-title">Bossbus</h3>
              <p class="project-item-description">Bus deliver company</p>
            </router-link>
          </li>
          <li class="project-item">
            <router-link to="portfolio/vue-shop" aria-label="Watch shop">
              <h3 class="project-item-title">Watch Shop</h3>
              <p class="project-item-description">Online shoping for watch lovers</p>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="about">
        <div class="about-left">
          <h2 class="about-left-title">I combine design & <br/> development</h2>
          <div class="tile tile-red">
            <h4 class="tile-title">Front-End</h4>
            <p class="tile-description">Developer</p>
          </div>
        </div>
        <div class="about-right">
          <div class="tile">
            <h4 class="tile-title">Projects</h4>
            <span class="tile-counter">24</span>
            <p class="tile-description">I' ve done to this moment</p>
          </div>
          <div class="tile">
            <h4 class="tile-title">Experience</h4>
            <span class="tile-counter">2+</span>
            <p class="tile-description">years of study & work</p>
          </div>
        </div>
        <div class="about-author">
          <div class="about-author-content">
            <h4 class="content-title">Uncompromising approach to each client causes 100% satisfaction.</h4>
            <p class="content-description">I always try to meet the challenge of client. You can check my offer.</p>
            <router-link class="content-link" to="/about" aria-label="About Me" title="About me">
              <svg enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.213 476.213" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <polygon points="345.61 107.5 324.39 128.71 418.79 223.11 0 223.11 0 253.11 418.79 253.11 324.39 347.5 345.61 368.71 476.21 238.11"/>
              </svg>
            </router-link>
          </div>
          <figure class="about-author-img"></figure>
        </div>
      </section>
      <section class="contact">
        <h2 class="contact-title">Let's create Your new awesome Project!</h2>
        <div class="contact-description">
          <div class="contact-tile contact-tile-small">
            <h3 class="contact-tile-title">Contact</h3>
            <p class="contact-tile-text">I will respond to you within 24 hours</p>
          </div>
          <div class="contact-tile contact-tile-big">
            <div class="contact-tile-content">
              <h3 class="contact-tile-title">Do you have a <br/> project in mind?</h3>
              <router-link class="contact-tile-link" to="/contact" aria-label="Let's start project">
                Let's start your project!
                <svg enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.213 476.213" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="345.61 107.5 324.39 128.71 418.79 223.11 0 223.11 0 253.11 418.79 253.11 324.39 347.5 345.61 368.71 476.21 238.11"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  </div>
</template>

<script>

import Footer from "../Footer/Footer"

export default {
  name: "Home",
  components: { 
    Footer
  }
}

</script>

<style lang="scss" src="./Home.scss" scoped/>