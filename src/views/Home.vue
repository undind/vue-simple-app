<template>
    <div>
        <navbar :hideBackToHome="true"></navbar>
        <div class="container is-fluid">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile cards__wrapper">
                    <ul class="cards__list">
                        <li class="cards__item" v-for="post in posts" :key="post._id">
                            <h3 class="item__title">{{ post.title }}</h3>
                            <div class="item__content">
                                <p>{{ post.description }}</p>
                            </div>
                            <div class="item__footer">
                                <div class="item__date">{{ moment(post.createdAt) }}</div>
                                <div class="item__btn-group">
                                    <button class="button is-light" @click="onClaps(post)">
                                        <b-icon pack="fa" icon="sign-language" size="is-medium" type="is-info"></b-icon>
                                        <span class="button__text">{{ post.claps }}</span>
                                    </button>
                                    <button class="button is-light" @click="openModalEdit(post)">
                                        <b-icon pack="fa" icon="edit" size="is-medium" type="is-info"></b-icon>
                                        <span class="button__text">Изменить</span>
                                    </button>
                                    <button class="button is-light" @click="confirmCustomDelete(post)">
                                        <b-icon pack="fa" icon="trash-alt" size="is-medium" type="is-danger"></b-icon>
                                        <span class="button__text">Удалить</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <pagination-comp :totalItems="posts.length"></pagination-comp>

                    <b-modal
                        :active.sync="isComponentModalActive"
                        full-screen
                        :can-cancel="false"
                        has-modal-card
                        trap-focus
                        :destroy-on-hide="false"
                        aria-role="dialog"
                        aria-modal
                    >
                        <modal-form v-bind="formProps"></modal-form>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import generateTooltipData from '@/helpers/generateTooltipData.js';

export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
        PaginationComp: () => import('components/Pagination.vue'),
        ModalForm: () => import('components/Modal.vue'),
    },
    data() {
        return {
            isComponentModalActive: false,
            formProps: {
                postTitle: '',
                postDescription: '',
                postId: '',
            },
        };
    },
    filters: {
        moment: function(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        },
    },
    computed: {
        ...mapState('posts', { posts: (state) => state.posts }),
    },
    methods: {
        ...mapActions('posts', ['fetchPosts', 'deletePost', 'updatePostClaps']),
        async fetchData() {
            try {
                await this.fetchPosts();
            } catch (e) {
                this.$buefy.toast.open(generateTooltipData(`Что-то пошло не так!`, 'danger'));
            }
        },
        confirmCustomDelete(post) {
            this.$buefy.dialog.confirm({
                title: 'Удалить пост',
                message: 'Вы уверены, что хотите <b>удалить</b> этот пост?',
                confirmText: 'Удалить пост',
                type: 'is-danger',
                hasIcon: false,
                onConfirm: async () => {
                    try {
                        await this.deletePost(post._id);
                        this.$buefy.toast.open(generateTooltipData(`Пост <b>${post.title}</b> удален!`, 'success'));
                    } catch (error) {
                        this.$buefy.toast.open(generateTooltipData(String(error), 'danger'));
                    }
                },
            });
        },
        async onClaps(post) {
            try {
                await this.updatePostClaps(post._id);
            } catch (error) {
                this.$buefy.toast.open(generateTooltipData(String(error), 'danger'));
            }
        },
        openModalEdit(post) {
            this.formProps.postTitle = post.title;
            this.formProps.postDescription = post.description;
            this.formProps.postId = post._id;
            this.isComponentModalActive = true;
        },
        moment(date) {
            return this.$moment(date).fromNow();
        },
    },
    created() {
        this.fetchData();
    },
};
</script>

<style lang="postcss" scoped>
.cards {
    &__item {
        background-color: #fff;
        padding: 20px;
        border-radius: 3px;
        margin-bottom: 20px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);

        .item {
            &__title {
                font-size: 26px;
                font-weight: 500;
                line-height: 1;
                margin-bottom: 10px;
            }

            &__date {
                font-size: 12px;
                opacity: 0.6;
            }

            &__content {
                margin-bottom: 10px;
            }

            &__footer {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .button {
                    margin-left: 10px;

                    .button__text {
                        margin-left: 12px;
                    }
                }
            }
        }
    }
}
</style>
