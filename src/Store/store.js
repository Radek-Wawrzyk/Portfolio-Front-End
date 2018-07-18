import Vue from 'vue'
import Vuex from 'vuex'
import { data } from "../Data/data"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolioItems: data
  },
  getters: {
    portfolioItems(state) {
      return state.portfolioItems;
    }
  },
  mutations: {
    filtration(state, category) {
      if (category !== "default") {
        state.portfolioItems= data.filter(item => item.category === category);
      } else {
        state.portfolioItems = data;
      }
    }
  },
  actions: {
    filtration(event, category) {
      event.commit("filtration", category);
    }
  }
})
