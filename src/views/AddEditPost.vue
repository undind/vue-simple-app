<template>
    <div>
        <navbar :hideAddBtn="true"></navbar>
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile">
                    <div class="cards__item">
                        <h3 class="title is-3 has-text-centered">Создать пост</h3>
                        <form>
                            <b-field label="Заголовок">
                                <b-input name="subject" expanded></b-input>
                            </b-field>

                            <b-field label="Содержание">
                                <b-input name="message" type="textarea"></b-input>
                            </b-field>

                            <b-field>
                                <p class="control">
                                    <button type="submit" class="button is-info">
                                        Сохранить
                                    </button>
                                </p>
                            </b-field>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
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
    }
}
</style>
