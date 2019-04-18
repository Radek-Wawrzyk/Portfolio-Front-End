import Vue from 'vue'
import App from './App.vue'
import Router from "./Router/router";
import Store from './Store/store';
import { client } from './API/';

//Libraries
import VeeValidate from 'vee-validate';

//Set libraries
Vue.use(VeeValidate);
Vue.use({client});

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
  created() {
    this.$store.dispatch('loadProjects');
  }
}).$mount('#app');
