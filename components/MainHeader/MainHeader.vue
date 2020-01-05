<template>
  <header class="main-header">
    <!-- <button class="main-header__scroll-down">
      Scroll down
    </button> -->
    <div class="container">
      <h1 class="main-header__heading">
        I create with details.
      </h1>
      <base-button
        type="outline"
        mode="link"
        url="/portfolio"
      >
        See my work
      </base-button>
    </div>
    
    <!-- <div class="main-header__column">
      
    </div> -->
    <img 
      src="https://images.unsplash.com/photo-1496361910809-f54291f339b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80"
      class="main-header__image"
      alt=""
    />
  </header>
</template>

<script>
const BaseButton = () => import('@/components/BaseButton/BaseButton.vue');

export default {
  name: 'MainHeader',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped src="./MainHeader.scss" />
