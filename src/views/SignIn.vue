<template>
    <div class="container is-fluid">
        <div class="columns is-mobile is-centered">
            <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile">
                <b-button expanded tag="router-link" to="/" type="is-info" class="link__home">На главную</b-button>
                <div class="cards__item">
                    <form>
                        <b-field>
                            <b-input
                                size="is-medium"
                                placeholder="Введите логин"
                                type="text"
                                icon-pack="fas"
                                icon="user"
                            >
                            </b-input>
                        </b-field>

                        <b-field>
                            <b-input
                                size="is-medium"
                                password-reveal
                                placeholder="Введите пароль"
                                type="password"
                                icon-pack="fas"
                                icon="unlock-alt"
                            >
                            </b-input>
                        </b-field>

                        <b-field>
                            <p class="control">
                                <b-button expanded type="submit" class="button is-info">
                                    Войти
                                </b-button>
                            </p>
                        </b-field>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.cards {
    &__item {
        background-color: #fff;
        padding: 30px;
        border-radius: 3px;
        margin-bottom: 20px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
    }
}

.link__home {
    margin-bottom: 36px;
}
</style>
