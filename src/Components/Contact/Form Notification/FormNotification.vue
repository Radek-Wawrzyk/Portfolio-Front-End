<template>
  <div>
    <transition name="fade-notification">
      <div class="success" v-if="sendStatus.success === true">
        <div class="success-email">
          <h4 class="success-email-header">Email has been sent!</h4>
          <div class="success-email-img"></div>
          <p class="success-email-description">Thank you for message, i will try to write back as soon as possible!</p>
        </div>
      </div>
    </transition>
    <transition name="fade-notification">
      <div class="error" v-if="sendStatus.error === true">
        <div class="error-email">
          <h4 class="error-email-header">Error</h4>
          <div class="error-email-img"></div>
          <p class="error-email-description">Message has not beed sent, sorry message hasn't been sent! There is a problem with connection (server)</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: "FormError",
  props: {
    sendStatus: Object
  }
}

</script>

<style lang="scss" src="./FormNotification.scss" scoped />