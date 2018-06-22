<template>
  <div class="page-content">
    <main id="contact">
      <header class="contact-header">
        <h1 class="contact-header-title">
          I'm full of ideas & willingness <br/>to implement new project!
        </h1>
        <p class="contact-header-description">
          If you have any question, go ahead and just ask me.
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
            Junior Front End Developer
          </h2>
          <p class="contact-info-tile-description">
            ...without boring passions & descriptions!
          </p>
        </div>
      </div>
      <header class="contact-communication-header">
        <h3 class="contact-communication-header-title">
          Let's do some great things together!
        </h3>
        <p class="contact-communication-header-description">
          Be in touch and feel free to correspondence with me.
        </p>
      </header>
      <form class="contact-form" >
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
          <button class="contact-form-item-btn" @click="formValidate" type="submit" onSubmit={this.sumbit}>
            Sumbit
          </button>
        </div>
      </form>
    </main>
    <FormError v-bind:statusModal="statusModal" v-bind:errorDetail="errorDetail" v-bind:error="error" ></FormError>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "./Footer";
import FormError from "./FormError";
import axios from 'axios';

export default {
  name: "Contact",
  components: { Footer, FormError },
  data() {
    return {
      statusModal: false,
      error: false,
      errorDetail: undefined,
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
        axios.post("//formspree.io/radek511@op.pl", {
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
          this.statusModal = true;

          setTimeout(e => {
            this.statusModal = false;
          }, 3000);
        })
        .catch( error => {
          console.log(error);
          this.error = true;
          this.errorDetail = error.response.status;

          setTimeout( () => {
            this.error = false;
          }, 3000);
        }) 
      } 

      //Fields validation
      this.data.name.length >= 1 ? this.errors.name = "" : this.errors.name = "Please fill Name";
      this.data.subject.length >= 1 ? this.errors.subject = "" : this.errors.subject = "Please fill Subject";
      this.data.message.length >= 1 ? this.errors.message = "" : this.errors.message = "Please fill Message";
      checkEmail.test(this.data.email) ? this.errors.email = "" : this.errors.email = "Bad Email address";
    }
  }
}

</script>
