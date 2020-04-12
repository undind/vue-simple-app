<template>
    <nav class="navbar">
        <a href="#" class="navbar__link">Логин</a>
    </nav>
</template>

<style lang="postcss" scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: rgb(60, 60, 243);
    display: flex;
    align-items: center;
    padding: 0 32px;

    &__link {
        margin-left: auto;
        color: #fff;
        padding: 14px;

        &:hover {
            background-color: rgb(81, 81, 240);
            transition: all .25s;
        }
    }
}
</style>
