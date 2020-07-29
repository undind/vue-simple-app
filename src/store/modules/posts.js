export default {
    namespaced: true,
    state: {
        posts: [],
        activePost: {},
    },
    mutations: {
        SET_POSTS: (state, posts) => (state.posts = posts),
        CREATE_POST: (state, post) => state.posts.push(post),
        DELETE_POST: (state, id) => (state.posts = state.posts.filter((post) => post._id !== id)),
        UPDATE_POST: (state, payload) =>
            (state.posts = state.posts.map((post) => {
                if (post._id === payload.id) {
                    return {
                        ...post,
                        title: payload.title,
                        description: payload.description,
                    };
                }

                return post;
            })),
        UPDATE_CLAPS: (state, id) =>
            (state.posts = state.posts.map((post) => {
                if (post._id === id) {
                    return {
                        ...post,
                        claps: ++post.claps,
                    };
                }

                return post;
            })),
        ACTIVE_POST: (state, id) => state.activePost = state.posts.find((p) => p._id === id),
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response = await this.$axios.get(`/api/posts/get`);
                commit('SET_POSTS', response.data.posts);
                return response;
            } catch (error) {
                throw error.response.data.message;
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

        async updatePost({ commit }, { id, title, description }) {
            try {
                const response = await this.$axios.post(`/api/post/update/${id}`, { title, description });
                commit('UPDATE_POST', { id, title, description });
                return response;
            } catch (error) {
                throw error.response.data.message;
            }
        },

        async updatePostClaps({ commit }, id) {
            try {
                const response = await this.$axios.post(`/api/post/update-claps/${id}`);
                commit('UPDATE_CLAPS', id);
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

        setActivePost({ commit }, id) {
            commit('ACTIVE_POST', id);
        },
    },
};
