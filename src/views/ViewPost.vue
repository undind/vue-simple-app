<template>
    <div>
        <navbar :hideAddBtn="true"></navbar>
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile">
                    <div class="cards__item">
                        <h3 class="title is-3 has-text-centered">{{ activePost.title }}</h3>
                        <p>{{ activePost.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    components: {
        Navbar: () => import('components/Navbar.vue'),
    },
    computed: {
        ...mapState('posts', { activePost: (state) => state.activePost }),
    },
    methods: {},
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
