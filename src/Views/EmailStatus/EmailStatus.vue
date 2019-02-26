<template>
  <div class="page-content">
    <main id="status">
      <section class="status" :class="[status ? 'status-success' : 'status-error']">
        <h1 class="status-title" :class="[status ? 'status-title-success' : 'status-title-error']">{{status ? success.status : error.status}}</h1>
        <p class="status-description">{{status ? success.message : error.message}}</p>
        <span class="status-timer">{{timer}}</span>
        <router-link to="/" class="status-link" aria-label="Back " title="Back">Back</router-link>
      </section>
    </main>
  </div> 
</template>

<script>

export default {
  name: 'EmailStatus',
  props: {
    status: Boolean
  },
  data: () => ({
    timer: 20,
  }),
  computed: {
    success() {
      const success = {
        status: `Success!`,
        message: `Message has been sent! I will try to respond as fast as it's possible!`
      };
      return success;
    },
    error() {
      const error = {
        status: `Error!`,
        message: `Message hasn't been sent! There is a problem with the server.`
      };
      return error;
    }
  },
  methods: {
    setTimer() {
      setInterval(() => {
        this.timer--;
        this.timer === 0 ? this.redirect() : false;
      }, 1000);
    },
    redirect() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.setTimer();
  }
};

</script>

<style lang="scss" src="./EmailStatus.scss" scoped />
