<template>
    <div>
        <navbar :hideBackToHome="true"></navbar>
        <div class="container is-fluid">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile cards__wrapper">
                    <ul class="cards__list">
                        <li class="cards__item">
                            <h3 class="item__title">Заголовок</h3>
                            <div class="item__content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div class="item__footer">
                                <div class="item__date">32 дня назад</div>
                                <div class="item__btn-group">
                                    <button class="button is-light">
                                        <b-icon pack="fa" icon="sign-language" size="is-medium" type="is-info"></b-icon>
                                        <span class="button__text">28</span>
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

                    <pagination-comp :totalItems="12"></pagination-comp>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
        PaginationComp: () => import('components/Pagination.vue')
    }
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