import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);