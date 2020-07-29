export default {
    namespaced: true,
    state: {
        user: [],
        userRole: window.localStorage.userRole,
        isAuth: !!window.localStorage.isAuth,
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
            state.userRole = user.role;
            state.isAuth = true;
        },
        UNSET_USER: (state) => {
            state.user = [];
            state.userRole = '';
            state.isAuth = false;
        },
    },
    actions: {
        async signinUser({ commit }, payload) {
            try {
                const response = await this.$axios.post(`/api/signin`, payload);
                commit('SET_USER', response.data.user);
                window.localStorage.isAuth = true;
                window.localStorage.userRole = response.data.user.role;
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },

        // async signup({ commit }, payload) {
        //     try {
        //         const response = await this.$axios.post(`/api/signup`, payload);
        //         return response;
        //     } catch (error) {
        //         throw error.response.data.message;
        //     }
        // },

        async logoutUser({ commit }) {
            try {
                delete window.localStorage.isAuth;
                delete window.localStorage.userRole;
                commit('UNSET_USER');
            } catch (error) {
                throw 'Что-то пошло не так';
            }
        },
    },
};
