<template>
  <div class="page-content">
    <main id="home">
      <header class="home-header">
        <h1 class="home-header-title">
          Radek Wawrzyk Front End Developer
        </h1>
        <p class="home-header-description">
          I'm available to <router-link to="/Contact" class="home-header-description-link" aria-label="hire me" title="hire me">hire.</router-link>
        </p>
      </header>
      <section class="projects">
        <h2 class="projects-title"></h2>
      </section>
      <section class="contact">
        <h2 class="contact-title">Let's do Your new awesome Project!</h2>
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