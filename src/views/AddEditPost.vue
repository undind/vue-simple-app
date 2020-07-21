<template>
    <div>
        <navbar :hideAddBtn="true"></navbar>
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile">
                    <div class="cards__item">
                        <h3 class="title is-3 has-text-centered">Создать пост</h3>
                        <form @submit.prevent="onSubmit">
                            <b-field label="Заголовок">
                                <b-input
                                    name="subject"
                                    required
                                    maxlength="100"
                                    expanded
                                    v-model="postData.title"
                                    validation-message="Заголовок обязателен"
                                ></b-input>
                            </b-field>

                            <b-field label="Содержание">
                                <b-input
                                    name="message"
                                    required
                                    maxlength="1000"
                                    type="textarea"
                                    v-model="postData.description"
                                    validation-message="Заполните содержание"
                                ></b-input>
                            </b-field>

                            <b-field>
                                <p class="control">
                                    <button :disabled="isLoading" type="submit" class="button is-info">
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
import { mapState, mapActions } from 'vuex';
import generateTooltipData from '@/helpers/generateTooltipData.js';

export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
    },
    data() {
        return {
            postData: {
                title: '',
                description: '',
            },
            isLoading: false,
        };
    },
    methods: {
        ...mapActions('posts', ['createPost']),
        async onSubmit() {
            this.isLoading = true;
            try {
                await this.createPost(this.postData);
                this.$buefy.toast.open(
                    generateTooltipData(`Пост <b>${this.postData.title}</b> был успешно создан!`, 'success')
                );
                this.$router.replace('/');
            } catch (error) {
                this.$buefy.toast.open(generateTooltipData(String(error), 'danger'));
                this.isLoading = false;
            } finally {
                this.isLoading = false;
            }
        },
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
