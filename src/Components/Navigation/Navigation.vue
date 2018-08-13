<template>
  <nav class="navigation">
    <figure class="navigation-logo" :class="{'active': actvieClass}">
      <router-link aria-label="Homepage" title="Homepage" to="/">
        <figcaption class="desktop">
          <span>Radek-</span>Wawrzyk
        </figcaption>
        <figcaption class="mobile">
          <span>R</span>w
        </figcaption>
      </router-link>
    </figure>
    <button 
      class="navigation-button" :class="{'active': actvieClass}" :aria-expanded="actvieClass? 'true' : 'false'"
      aria-label="Open mobile menu" aria-controls="menu" v-on:click="toggleNav"
    >
      <p class="navigation-button-description">Menu</p>
      <span></span>
    </button>
    <ul class="navigation-menu" :class="{'active': actvieClass}" id="menu">
      <li @click="toggleNav" ><router-link to='/'>Home</router-link></li>
      <li @click="toggleNav" ><router-link aria-label="Portfolio subpage" title="Portfolio subpage" to="/portfolio">Portfolio</router-link></li>
      <li @click="toggleNav" ><router-link aria-label="About subpage" title="About subpage" to="/about">About</router-link></li>
      <li @click="toggleNav" ><router-link aria-label="Contact subpage" title="Contact subpage" to="/contact">Contact</router-link></li>
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

<style lang="scss" src="./Navigation.scss" scoped />