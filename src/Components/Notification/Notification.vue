<template>
  <li class="notifcation" :class="[notification.type === 'success' ? 'notification-success' : 'notification-error']">
    <figure class="notification-icon">
      <svg v-if="notification.type === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
      <svg v-if="notification.type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/></svg>
    </figure>
    <div class="notification-content">
      <h3 class="notification-content-title">{{notification.type}}</h3>
      <p class="notification-content-message">{{notification.message}}</p>
    </div>
    <button class="notification-delete" @click="deleteNotification">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
    </button>
  </li>
</template>

<script>

export default {
  name: 'Notifcation',
  props: {
    notification: Object
  },
  methods: {
    deleteNotification() {
      this.$store.dispatch('deleteNotification', this.notification.id);
    }
  },
  mounted() {
    setTimeout(() => {
      this.deleteNotification();
    }, 5000);
  }
};

</script>

<style scoped src="./Notification.scss" lang="scss" />
