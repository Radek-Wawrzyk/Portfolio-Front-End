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
            Poland, Pomorskie, Gdynia<br/>
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
      <form class="contact-form" method="POST">
        <div class="contact-form-item">
          <input type="text" name="name" v-model="data.name" placeholder="Name" aria-required="true" title="Your name" aria-label="Name"/>
          <transition name="fade-form">
            <p class="contact-form-item-alert" v-if="errors.name">{{errors.name}}</p>
          </transition>
        </div>
        <div class="contact-form-item">
          <input type="email" name="email" v-model="data.email" placeholder="Email adress" aria-required="true" title="Your adress email" aria-label="Email adress"/>
          <transition name="fade-form">
            <p class="contact-form-item-alert" v-if="errors.email">{{errors.email}}</p>
          </transition>
        </div>
        <div class="contact-form-item">
          <input type="text" name="subject" v-model="data.subject" placeholder="Subject" aria-required="true" title="Subject" aria-label="Subject"/>
          <transition name="fade-form">
            <p class="contact-form-item-alert" v-if="errors.subject">{{errors.subject}}</p>
          </transition>
        </div>
        <div class="contact-form-item">
          <textarea v-model="data.message" name="message" placeholder="Your message" aria-required="true" title="Message" aria-label="Your message"></textarea>
          <transition name="fade-form">
            <p class="contact-form-item-alert" v-if="errors.message">{{errors.message}}</p>
          </transition>
        </div>
        <div class="contact-form-item">
          <button class="contact-form-item-btn" @click="formValidate" type="submit">
            Sumbit
            <svg enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.213 476.213" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <polygon points="345.61 107.5 324.39 128.71 418.79 223.11 0 223.11 0 253.11 418.79 253.11 324.39 347.5 345.61 368.71 476.21 238.11"/>
            </svg>
          </button>
        </div>
      </form>
    </main>
    <FormNotification v-bind:sendStatus="sendStatus" ></FormNotification>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/Components/Footer";
import FormNotification from "./FormNotification";
import axios from 'axios';

export default {
  name: "Contact",
  components: { Footer, FormNotification },
  data() {
    return {
      sendStatus: {
        error: false,
        success: false
      },
      data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
  },
  methods: {
    formValidate(event) {
      event.preventDefault();
      const checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      //Main condition
      if (checkEmail.test(this.data.email) && this.data.name.length >= 1 && this.data.subject.length >= 1  && this.data.message.length >= 1 ) {

        JSON.stringify(this.data);

        //Post HTTP Request
        axios.post("sendMail.php", {
            name: this.data.name,
            email: this.data.email,
            subject: this.data.subject,
            message: this.data.message
        })
        .then(response => {

          //Reset fields and states
          for (let key in this.data) {
            this.data[key] = "";
          }
          for (let key in this.errors) {
            this.errors[key] = "";
          }

          //Alert notification
          this.sendStatus.success = true;

          setTimeout(e => {
            this.sendStatus.success = false;
          }, 3000);
        })
        .catch( error => {

          console.log(error);

          //Alert notification
          this.sendStatus.error = true;

          setTimeout( () => {
            this.sendStatus.error= false;
          }, 3000);
        }) 
      } 

      //Fields validation
      this.data.name.length >= 1 ? this.errors.name = "" : this.errors.name = "Please fill Your name";
      this.data.subject.length >= 1 ? this.errors.subject = "" : this.errors.subject = "Please fill the subject";
      this.data.message.length >= 1 ? this.errors.message = "" : this.errors.message = "Please fill the message";
      checkEmail.test(this.data.email) ? this.errors.email = "" : this.errors.email = "Your email address is incorrect";
    }
  }
}

</script>

<style lang="scss" src="./Contact.scss" scoped />