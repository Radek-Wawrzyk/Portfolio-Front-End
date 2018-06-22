<template>
  <nav class="navigation">
    <figure class="navigation-logo">
      <router-link aria-label="Homepage" title="Homepage" to="/"><img src="https://blue-shark.co.uk/wp-content/uploads/2016/05/icon-web_dev.png" alt="logo"/></router-link>
    </figure>
    <button 
      class="navigation-button" v-bind:class="{'active': actvieClass}"  v-bind:aria-expanded="actvieClass" 
      aria-label="Open mobile menu" aria-controls="menu" v-on:click="toggleNav"
    >
      <p class="navigation-button-description">Menu</p>
      <span></span>
    </button>
    <ul class="navigation-menu" v-bind:class="{'active': actvieClass}" id="menu">
      <li v-on:click="toggleNav" ><router-link to='/'>Home</router-link></li>
      <li v-on:click="toggleNav" ><router-link aria-label="Portfolio subpage" title="Portfolio subpage" to="/portfolio">Portfolio</router-link></li>
      <li v-on:click="toggleNav" ><router-link aria-label="About subpage" title="About subpage" to="/about">About</router-link></li>
      <li v-on:click="toggleNav" ><router-link aria-label="Contact subpage" title="Contact subpage" to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      actvieClass: false
    }
  },
  methods: {
    toggleNav() {
      this.actvieClass =! this.actvieClass;
    }
  }
}

</script>
