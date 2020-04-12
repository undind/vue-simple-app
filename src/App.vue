<template>
    <div>
        <navbar></navbar>
        <div class="container is-fluid">
            <div class="columns is-mobile">
                <div class="column is-half is-offset-one-quarter cards__wrapper">
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
                                    <button>28</button>
                                    <button>Изменить</button>
                                    <button>Удалить</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Navbar: () => import('components/Navbar.vue')
    }
};
</script>

<style lang="postcss" scoped>
.cards {
    &__item {
        background-color: #fff;
        padding: 20px;
        border-radius: 3px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);

        .item {
            &__title {
                font-size: 26px;
                font-weight: 500;
                line-height: 1;
                margin-bottom: 10px;
            }

            &__content {
                margin-bottom: 10px;
            }
        }
    }
}
</style>
