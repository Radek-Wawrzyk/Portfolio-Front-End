<template>
  <div class="project-form">
    <background-text opacity="0.3">
      Form
    </background-text>
    <div class="container">
      <h1 class="project-form__heading">
        Project form
      </h1>
      <div class="project-form__content">
        <transition name="fade" mode="out-in">
          <validation-observer
            class="project-form__inner"
            tag="form"
            ref="project-form-0"
            v-if="stage === 0"
            key="project-form-0"
          >
            <div class="project-form__group">
              <base-input
                type="text"
                name="name"
                rules="required"
                v-model="name"
                label="What's your name?"
              />
            </div>
            <div class="project-form__group">
              <base-input
                type="text"
                name="company"
                ref="name"
                rules="required"
                v-model="company"
                label="Company / organization name"
              />
            </div>
            <div class="project-form__group">
              <base-input
                type="text"
                name="role"
                ref="name"
                rules="required"
                v-model="role"
                label="What's your role?"
              />
            </div>
            <div class="project-form__group project-form__group--half">
              <base-input
                type="text"
                name="email"
                rules="required|email"
                v-model="email"
                label="Email"
              />
              <base-input
                type="text"
                name="phone number"
                :rules="{ regex: /[0-9+ ]+$/ }"
                v-model="phone"
                label="Phone number"
              />
            </div>
          </validation-observer>
          <validation-observer
            class="project-form__inner"
            tag="form"
            ref="project-form-1"
            v-if="stage === 1"
            key="project-form-1"
          >
            <div class="project-form__group">
              <base-textarea
                name="project description"
                rules="required|min:30"
                v-model="description"
                label="Tell me about your project"
              />
            </div>
          </validation-observer>
          <validation-observer
            class="project-form__inner"
            tag="form"
            ref="project-form-2"
            v-if="stage === 2"
            key="project-form-2"
          >
            <div class="project-form__group">
              <base-input
                type="text"
                name="project time"
                rules="required"
                v-model="time"
                label="Your time expectations"
              />
            </div>
            <div class="project-form__group">
              <base-input
                type="text"
                name="budget"
                rules="required"
                v-model="budget"
                label="Your budget expectations"
              />
            </div>
            <div class="project-form__group">
              <base-input
                type="text"
                name="additional"
                rules="required"
                v-model="additionalInfo"
                label="How did you heart about me?"
              />
            </div>
          </validation-observer>
        </transition>
      </div>
      <footer class="project-form__bottom">
        <button 
          class="project-form__action project-form__action--prev"
          @click="goPrev()"
        >
          <img 
            src="~/assets/icons/arrow-left.svg"
            alt=""
            class="project-form__action-icon"
          />
          <p class="project-form__action-text">
            Prev
          </p>
        </button>
        <ul class="project-form__pagination">
          <li class="project-form__pagination-item">
            <button class="project-form__pagination-inner">
              <p 
                class="project-form__pagination-counter"
                :class="[stage === 0 ? 'project-form__pagination-counter--active' : '' ]"
              >
                01.
              </p>
              <span 
                class="project-form__pagination-border" 
                :class="[stage === 0 ? 'project-form__pagination-border--active' : '' ]"
              />
            </button>
          </li>
          <li class="project-form__pagination-item">
            <button class="project-form__pagination-inner">
              <p 
                class="project-form__pagination-counter"
                :class="[stage === 1 ? 'project-form__pagination-counter--active' : '' ]"
              >
                02.
              </p>
              <span 
                class="project-form__pagination-border" 
                :class="[stage === 1 ? 'project-form__pagination-border--active' : '' ]"
              />
            </button>
          </li>
          <li class="project-form__pagination-item">
            <button class="project-form__pagination-inner">
              <p 
                class="project-form__pagination-counter"
                :class="[stage === 2 ? 'project-form__pagination-counter--active' : '' ]"
              >
                03.
              </p>
              <span 
                class="project-form__pagination-border" 
                :class="[stage === 2 ? 'project-form__pagination-border--active' : '' ]"
              />
            </button>
          </li>
        </ul>
        <button 
          class="project-form__action project-form__action--next"
          @click="goNext(); stage === 2 ? submitForm() : false"
        >
          <transition name="fade" :key>
            <p class="project-form__action-text">
              {{ stage === 2 ? 'Send' : 'Next' }}
            </p>
          </transition>
          <img 
            src="~/assets/icons/arrow-right.svg"
            alt=""
            class="project-form__action-icon"
          />
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
const BaseInput = () => import('@/components/BaseInput/BaseInput.vue');
const BaseTextarea = () => import('@/components/BaseTextarea/BaseTextarea.vue');
const BackgroundText = () => import(/* webpackChunkName: "background-text-component" */ '@/components/BackgroundText/BackgroundText.vue');

export default {
  name: 'ProjectFormPage',
  components: {
    BaseInput,
    BaseTextarea,
    BackgroundText,
  },
  data: () => ({
    stage: 0,
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    description: '',
    budget: '',
    additionalInfo: '',
    time: '',
  }),
  methods: {
    async submitForm() {
      // try {
      //   const response = await axios.post('mail.php', {
      //     name: this.name,
      //     company: this.company,
      //     email: this.email,
      //     phone: this.phone,
      //     description: this.description,
      //     budget: this.budget,
      //     additionalInfo: this.additionalInfo,
      //     time: this.time,
      //   });
      // } catch (err) {
      //   console.log(err)
      // }

      alert('Success');
    },
    async goPrev() {
      const valid = await this.$refs[`project-form-${ this.stage }`].validate();
      this.stage !== 0 ? this.stage-- : false;
    },
    async goNext() {
      const valid = await this.$refs[`project-form-${ this.stage }`].validate();

      if (valid) {
        this.stage !== 2 ? this.stage++ : false;
      }     
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
