<template>
  <transition name="fade">
    <div class="preloader" v-if="preloaderStatus === true && dowloadedProjects === false">
      <p class="preloader-text">Loading <span>...</span></p>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Preloader",
  props: { 
    preloaderStatus: Boolean 
	},
	computed: {
		...mapState({
			dowloadedProjects: state => state.dowloadedProjects
    })
	}
}

</script>

<style lang="scss" src="./Preloader.scss" scoped />

