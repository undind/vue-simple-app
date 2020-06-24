<template>
    <div>
        <navbar :hideBackToHome="true"></navbar>
        <div class="container is-fluid">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile cards__wrapper">
                    <ul class="cards__list">
                        <li class="cards__item" v-for="post in posts" key="post._id">
                            <h3 class="item__title">{{post.title}}</h3>
                            <div class="item__content">
                                <p>{{post.description}}</p>
                            </div>
                            <div class="item__footer">
                                <div class="item__date">32 дня назад</div>
                                <div class="item__btn-group">
                                    <button class="button is-light">
                                        <b-icon pack="fa" icon="sign-language" size="is-medium" type="is-info"></b-icon>
                                        <span class="button__text">{{post.claps}}</span>
                                    </button>
                                    <button class="button is-light">
                                        <b-icon pack="fa" icon="edit" size="is-medium" type="is-info"></b-icon>
                                        <span class="button__text">Изменить</span>
                                    </button>
                                    <button class="button is-light">
                                        <b-icon pack="fa" icon="trash-alt" size="is-medium" type="is-danger"></b-icon>
                                        <span class="button__text">Удалить</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <pagination-comp :totalItems="12" v-if="posts.length > 10"></pagination-comp>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
        PaginationComp: () => import('components/Pagination.vue'),
    },
    computed: {
        ...mapState('posts', { posts: (state) => state.posts }),
    },
    methods: {
        ...mapActions('posts', ['fetchPosts']),
        async fetchData() {
            // this.isLoading = true;
            try {
                await this.fetchPosts();
            } catch (e) {
                console.log(e)
            } finally {
                // this.isLoading = false;
            }
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
