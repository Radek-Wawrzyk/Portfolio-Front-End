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
          <p class="contact-form-item-alert">{{errors.name}}</p>
        </div>
        <div class="contact-form-item">
          <input type="text" name="email" v-model="data.email" placeholder="Email adress" aria-required="true" title="Your adress email" aria-label="Email adress"/>
          <p class="contact-form-item-alert">{{errors.email}}</p>
        </div>
        <div class="contact-form-item">
          <input type="text" name="subject" v-model="data.subject" placeholder="Subject" aria-required="true" title="Subject" aria-label="Subject"/>
          <p class="contact-form-item-alert">{{errors.subject}}</p>
        </div>
        <div class="contact-form-item">
          <textarea v-model="data.message" name="message" placeholder="Your message" aria-required="true" title="Message" aria-label="Your message"></textarea>
          <p class="contact-form-item-alert">{{errors.message}}</p>
        </div>
        <div class="contact-form-item">
          <button class="contact-form-item-btn" @click="formValidate" type="submit" onSubmit={this.sumbit}>
            Sumbit
          </button>
        </div>
      </form>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "./Footer";
import axios from 'axios';

export default {
  name: "Contact",
  components: { Footer },
  data() {
    return {
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
    formValidate(e) {
      e.preventDefault();
      const emailCheck = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      JSON.stringify(this.data);

      if (emailCheck.test(this.data.email) && this.data.name.length >= 1 && this.data.subject.length >= 1  && this.data.message.length >= 1 ) {
        axios.post("//formspree.io/radek511@op.pl", {
            name: this.data.name,
            email: this.data.email,
            subject: this.data.subject,
            message: this.data.message
        })
        .then(response => {
          for (let key in this.data) {
            this.data[key] = "";
          }
          for (let key in this.errors) {
            this.errors[key] = "";
          }
          alert("ok!");
        })
        .catch(e => {
          console.log(e);
        }) 
      } else {
        alert("not ok!");
        if (emailCheck.test(this.data.email)) {
          return true;
        } else {
          this.errors.email = "Bad email address";
        }
        if (this.data.name <= 1) this.errors.name = "Pls fill name";
        if (this.data.subject <= 1) this.errors.subject = "pls fill subject";
        if (this.data.message <= 1) this.errors.message = "pls fill message";
      }
    }
  }
}

</script>
