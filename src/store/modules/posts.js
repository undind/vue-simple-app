export default {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        SET_POSTS: (state, posts) => (state.posts = posts),
        CREATE_POST: (state, post) => state.posts.push(post),
        DELETE_POST: (state, id) => state.posts = state.posts.filter((post) => post._id !== id),
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

        async createPost({ commit }, post) {
            try {
                const response = await this.$axios.post(`/api/post/create`, post);
                commit('CREATE_POST', response.data);
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },

        async deletePost({ commit }, id) {
            try {
                const response = await this.$axios.delete(`/api/post/delete/${id}`);
                commit('DELETE_POST', id);
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },
    },
};
