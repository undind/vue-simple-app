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
                <button class="button is-primary">Сохранить</button>
            </footer>
        </form>
    </div>
</template>

<script>
export default {
    props: ['postTitle', 'postDescription'],
    data() {
        return {
            title: this.postTitle,
            description: this.postDescription,
        };
    },
    methods: {
        onSubmit() {
            console.log(this.title, this.description);
        },
    },
};
</script>
