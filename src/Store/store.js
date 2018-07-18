import Vue from 'vue'
import Vuex from 'vuex'
import { Data } from "../Data/data"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Data
  },
  getters: {
    portfolioItems(state) {
      return state.Data;
    }
  },
  mutations: {
    
  },
  actions: {

  }
})
