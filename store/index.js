export const state = () => ({
  projects: [],
  loaded: false,
})

export const getters = {
  getProject: (state) => (slug) => {
    return state.projects.find(project => project.uid === slug);
  },
};

export const mutations = {
  SET_DATA(state, payload) {
    state.projects = payload;
  },
  SET_LOAD_STATUS(state, payload) {
    state.loaded = payload;
  },
};

export const actions = {
  async fetchData({ commit }, payload) {
    commit('SET_DATA', payload);
    commit('SET_LOAD_STATUS', true);
  },
};
