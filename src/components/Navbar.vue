<template>
    <nav class="my-navbar">
        <b-button
            v-if="hideAddBtn === false"
            @click.prevent="replaceToPostEditAdd()"
            type="is-primary"
            inverted
            outlined
        >
            Добавить пост
        </b-button>
        <router-link
            v-if="hideBackToHome === false"
            class="my-navbar__link my-navbar__link_to-home"
            :to="{ path: '/' }"
        >
            На главную
        </router-link>
        <a href="#" @click.prevent="replaceToSignIn()" class="my-navbar__link">Логин</a>
    </nav>
</template>

<script>
export default {
    props: {
        hideAddBtn: {
            default: false,
            type: Boolean
        },
        hideBackToHome: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        replaceToPostEditAdd() {
            this.$router.replace('/post');
        },
        replaceToSignIn() {
            this.$router.replace('/signin');
        }
    }
};
</script>

<style lang="postcss" scoped>
.my-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    background-color: #167df0;
    z-index: 10000;

    &__link {
        margin-left: auto;
        color: #fff;
        padding: 14px;

        &:hover {
            background-color: #3e3bff;
            transition: all 0.25s;
            color: #fff;
        }

        &_to-home {
            margin-left: 0;
        }
    }
}
</style>
