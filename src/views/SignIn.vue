<template>
    <div class="container is-fluid">
        <div class="columns is-mobile is-centered">
            <div class="column is-half-desktop is-two-thirds-tablet is-three-quarters-mobile">
                <form>
                    <b-field>
                        <b-input size="is-medium" placeholder="Введите логин" type="text" icon-pack="fas" icon="user">
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
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
