export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS: (state, posts) => (state.posts = posts),
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await this.$axios.get(`/api/posts/get`);
        commit('SET_POSTS', response.data.posts);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  }
}