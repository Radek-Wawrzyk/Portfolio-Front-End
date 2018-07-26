import Vue from 'vue'
import Vuex from 'vuex'
import { data } from "../Data/data"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolioItems: data,
    activeButton: "default"
  },
  getters: {
    portfolioItems: state => {
      return state.portfolioItems;
    },
    activeButton: state => {
      return state.activeButton;
    }
  },
  mutations: {
    filtration: (state, category) => {
      if (category !== "default") {
        state.portfolioItems = data.filter(item => item.category === category);
        state.activeButton = category;
      } else {
        state.portfolioItems = data;
        state.activeButton = "default";
      }
    }
  },
  actions: {
    filtration: (event, category) => {
      event.commit("filtration", category);
    }
  }
})
