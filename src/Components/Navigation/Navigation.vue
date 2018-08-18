<template>
  <nav class="navigation">
    <figure class="navigation-logo" :class="{'active': actvieClass}">
      <router-link aria-label="Homepage" title="Homepage" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 795 800"><g id="main"><rect class="cls-1" width="250" height="800"/><rect class="cls-1" x="546.37" y="490.87" width="280.81" height="363.27" transform="translate(-349.24 333.49) rotate(-30)"/><rect class="cls-1" x="500.57" y="412.75" width="370.77" height="218.55" transform="translate(-281.04 419.4) rotate(-37.1)"/><rect class="cls-1" y="397" width="340" height="403"/><rect class="cls-1" width="795" height="198"/><rect class="cls-1" x="515" width="280" height="397"/><rect class="cls-1" y="397" width="595" height="200"/><rect class="cls-1" x="551" y="659" width="244" height="141"/></g></svg>
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