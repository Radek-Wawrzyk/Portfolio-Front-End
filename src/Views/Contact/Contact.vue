<template>
  <div class="page-content">
    <main id="contact">
      <header class="contact-header">
        <h1 class="contact-header-title">
          I'm full of fresh ideas & willingness <br/>to work with something new!
        </h1>
        <p class="contact-header-description">
          If you want to contact me, just check information below.
        </p>
      </header>
      <div class="contact-info">
        <div class="contact-info-tile">
          <h2 class="contact-info-tile-title">Radek Wawrzyk</h2>
          <p class="contact-info-tile-description">
            United Kingdom, Wales, Aberystwyth<br/>
            +48 516 649 611<br/>
            radek511@op.pl<br/>
          </p>
        </div>
        <div class="contact-info-tile">
          <h2 class="contact-info-tile-title">
            Front End Developer
          </h2>
          <p class="contact-info-tile-description">
            ... with passion and will to improve his skills.
          </p>
        </div>
      </div>
      <header class="contact-communication-header">
        <h3 class="contact-communication-header-title">
          Let's make something great together!
        </h3>
        <p class="contact-communication-header-description">
          Feel free to contact me.
        </p>
      </header>
      <ContactForm></ContactForm>
    </main>
    <FormNotification v-bind:sendStatus="sendStatus" ></FormNotification>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/Components/Footer/Footer";
import FormNotification from "@/Components/Form Notification/FormNotification";
import ContactForm from '@/Components/ContactForm/ContactForm';
import axios from 'axios';

export default {
  name: "Contact",
  components: { Footer, FormNotification, ContactForm },
  data() {
    return {
      sendStatus: {
        error: false,
        success: false
      },
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
  },
}

</script>

<style lang="scss" src="./Contact.scss" scoped />