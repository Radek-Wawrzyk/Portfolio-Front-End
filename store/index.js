import apollo from '@/apollo/config';
import gql from 'graphql-tag';

export const state = () => ({
  projects: [],
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const actions = {
  async fetchData({ app }) {
    try {
      // const { data } = await apollo.query({
      //   query: gql`
      //   allPortfolioProjects {
      //     id
      //     name
      //     titleUp
      //     titleDown
      //     slug
      //     isFeatured
      //     order
      //     mainImage {
      //       url
      //     }
      //     headerContent {
      //       heading
      //       value
      //       id
      //     }
      //   }
      //   `
      // });



      console.log(app);
    } catch(err) {
      console.log(err);
    }
  },
};
