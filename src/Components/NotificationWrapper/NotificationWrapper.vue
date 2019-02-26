<template>
  <div class="notifications-wrapper">
    <ul class="notifications-wrapper-list">
      <transition-group name="moving-fade-alerts">
        <Notification class="notification" v-for="(notification, index) in notifications" :key="index" :notification="notification"></Notification>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Notification from '@/Components/Notification/Notification';

export default {
  name: 'NotificationWrapper',
  components: {
    Notification
  },
  computed: mapState({
    notifications: state => state.notifications
  })
};

</script>

<style scoped src="./NotificationWrapper.scss" lang="scss" />
