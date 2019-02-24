<template>
  <form class="contact-form" method="POST" @submit="submitForm">
    <div class="contact-form-item">
      <input type="text" name="name" v-model="credentials.name" v-validate="'required'" placeholder="Name" aria-required="true" title="Your name" aria-label="Name"/>
      <transition name="fade-form">
        <p class="contact-form-item-alert" v-if="errors.has('name')">{{errors.first('name')}}</p>
      </transition>
    </div>
    <div class="contact-form-item">
      <input type="email" name="email" v-model="credentials.email" v-validate="'required|email'" placeholder="Email adress" aria-required="true" title="Your adress email" aria-label="Email adress"/>
      <transition name="fade-form">
        <p class="contact-form-item-alert" v-if="errors.has('email')">{{errors.first('email')}}</p>
      </transition>
    </div>
    <div class="contact-form-item">
      <input type="text" name="subject" v-model="credentials.subject" v-validate="'required'" placeholder="Subject" aria-required="true" title="Subject" aria-label="Subject"/>
      <transition name="fade-form">
        <p class="contact-form-item-alert" v-if="errors.has('subject')">{{errors.first('subject')}}</p>
      </transition>
    </div>
    <div class="contact-form-item">
      <textarea v-model="credentials.message" name="message" v-validate="'required'" placeholder="Your message" aria-required="true" title="Message" aria-label="Your message"></textarea>
      <transition name="fade-form">
        <p class="contact-form-item-alert"v-if="errors.has('message')">{{errors.first('message')}}</p>
      </transition>
    </div>
    <div class="contact-form-item">
      <button class="contact-form-item-btn" @click.prevent="submitForm" type="submit">
        Submit
        <svg enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.213 476.213" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <polygon points="345.61 107.5 324.39 128.71 418.79 223.11 0 223.11 0 253.11 418.79 253.11 324.39 347.5 345.61 368.71 476.21 238.11"/>
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data: () => ({
    credentials: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  }),
  methods: {
    async submitForm() {
      const validate = await this.$validator.validateAll();
      validate === true ? this.sendRequest() : false;
    },
    async sendRequest() {
      JSON.stringify(this.credentials);
      try {
        const response = await axios.post('sendMail.php', {
          name: this.credentials.name,
          email: this.credentials.email,
          subject: this.credentials.subject,
          message: this.credentials.message
        });

        for (let key in this.data) {
          this.credentials[key] = "";
        }
      } catch(error) {
        console.log(error.message);
      }
    }
  }
};

</script>

<style lang="scss" src="./ContactForm.scss" scoped />