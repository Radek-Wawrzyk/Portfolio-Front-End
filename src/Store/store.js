import Vue from 'vue';
import Vuex from 'vuex';
import { data } from "../Data/data";
import { client } from "@/API/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolioItems: [],
    activeButton: "default",
    notifications: []
  },
  getters: {
    loadProject: state => slug => {
      return state.portfolioItems.find(item => item.slug === slug);
    }
  },
  actions: {
    loadProjects: async ({ commit, dispatch }) => {
      try {
        const projectsPromise = client.items.all({ "filter[type]": "project" }, { allPages: true });
        const imagesPromise = client.uploads.all();
        const [ projects, images ] = await Promise.all([projectsPromise, imagesPromise]);
  
        let finalProjects = [];
        projects.forEach(project => {
          const { title, description, category, header, id, live, slug, technologies } = project;
          finalProjects.push({
            title,
            description,
            category,
            header,
            id,
            live,
            slug,
            technologies: JSON.parse(technologies),
            mockup: images.find(image => image.id === project.mockup).url,
            mainImg: images.find(image => image.id === project.mainImg).url
          });
        });
        commit('SET_PROJECTS', finalProjects);
        
      } catch (err) {
        dispatch('addNotification', {
          type: 'error',
          message: 'Błąd bazy danych!'
        });
      }
    },
    filtration: ({ commit }, category) => {
      commit("FILTRATION", category);
    },
    addNotification: ({ commit }, notification) => {
      commit('ADD_NOTIFICATION', notification);
    },
    deleteNotification: ({ commit }, notificationID) => {
      commit('DELETE_NOTIFICATION', notificationID);
    }
  },
  mutations: {
    SET_PROJECTS: (state, projects) => {
      state.portfolioItems = projects;
    },
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
