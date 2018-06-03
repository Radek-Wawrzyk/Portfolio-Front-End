<template>
  <div>
    <div class="success" v-if="statusModal === true">
      <transition name="fade-up" appear >
        <div class="success-email">
          <h4 class="success-email-header">Email has been sent!</h4>
          <div class="success-email-img"></div>
          <p class="success-email-description">Thank you for message, i will try to write back as soon as possible!</p>
        </div>
      </transition>
    </div>
    <div class="error" v-if="error === true">
      <transition name="fade-up" appear >
        <div class="error-email">
          <h4 class="error-email-header">Error</h4>
          <div class="error-email-img"></div>
          <p class="error-email-description">{{errorDetail}}, sorry message hasn't been sent! There is a problem with connection (server)</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: "FormError",
  props: {
    statusModal: Boolean,
    errorDetail: String && Number,
    error: Boolean
  }
}

</script>
