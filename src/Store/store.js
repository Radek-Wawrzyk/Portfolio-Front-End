import Vue from 'vue';
import Vuex from 'vuex';
import { data } from "../Data/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolioItems: data,
    activeButton: "default",
    notifications: []
  },
  actions: {
    filtration: ({ commit }, category) => {
      commit("FILTRATION", category);
    },
    addNotification: ({commit}, notification) => {
      commit('ADD_NOTIFICATION', notification);
    },
    deleteNotification: ({commit}, notificationID) => {
      commit('DELETE_NOTIFICATION', notificationID);
    }
  },
  mutations: {
    FILTRATION: (state, category) => {
      if (category !== "default") {
        state.portfolioItems = data.filter(item => item.category === category);
        state.activeButton = category;
      } else {
        state.portfolioItems = data;
        state.activeButton = "default";
      }
    },
    ADD_NOTIFICATION: (state, notification) => {
      state.notifications.push(notification);
    },
    DELETE_NOTIFICATION: (state, notificationID) => {
      const newArray = state.notifications.filter(notification => notification.id !== notificationID);
      state.notifications = newArray;
    }
  },
})
