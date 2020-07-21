export default {
    namespaced: true,
    state: {
        user: [],
    },
    mutations: {
        SET_USER: (state, user) => (state.user = user),
    },
    actions: {
        async signinUser({ commit }, payload) {
            try {
                const response = await this.$axios.get(`/api/signin`, payload);
                commit('SET_USER', response.data.posts);
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },

        async signup({ commit }, payload) {
            try {
                const response = await this.$axios.post(`/api/signup`, payload);
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },
    },
};
