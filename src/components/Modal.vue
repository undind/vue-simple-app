<template>
    <div class="modal-card" style="width: auto">
        <form @submit.prevent="onSubmit">
            <header class="modal-card-head">
                <p class="modal-card-title">Редактирование поста</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Заголовок">
                    <b-input type="text" v-model="title" :value="title" required> </b-input>
                </b-field>

                <b-field label="Содержание">
                    <b-input type="textarea" v-model="description" :value="description" required> </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Закрыть</button>
                <button class="button is-info">Сохранить</button>
            </footer>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import generateTooltipData from '@/helpers/generateTooltipData.js';

export default {
    props: ['postTitle', 'postDescription', 'postId'],
    data() {
        return {
            title: this.postTitle,
            description: this.postDescription,
            id: this.postId,
            isLoading: false,
        };
    },
    methods: {
        ...mapActions('posts', ['updatePost']),
        async onSubmit() {
            try {
                if (this.title !== this.postTitle || this.description !== this.postDescription) {
                    await this.updatePost({ id: this.id, title: this.title, description: this.description });
                    this.$buefy.toast.open(generateTooltipData(`Пост <b>${this.title}</b> обновлен!`, 'success'));
                }

                this.$parent.close();
            } catch (error) {
                this.$buefy.toast.open(generateTooltipData(String(error), 'danger'));
            }
        },
    },
};
</script>
