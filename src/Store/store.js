import Vue from 'vue';
import Vuex from 'vuex';
import { data } from "../Data/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolioItems: data,
    activeButton: "default"
  },
  actions: {
    filtration: ({ commit }, category) => {
      commit("FILTRATION", category);
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
    }
  },
})
