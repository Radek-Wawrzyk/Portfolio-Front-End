<template>
  <div class="preloader">
    <div class="preloader__inner">
      <img
        class="preloader__logo"
        alt="Radosław Wawrzyk logo"
        src="~/assets/images/logo.svg"
      />
      <p class="preloader__text">
        loading...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>

<style lang="scss" scoped src="./Preloader.scss" />
