<template>
    <div class="mb-16">
        <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Nuxt Authentication</v-app-bar-title>
            <div>
                <NuxtLink to="/" class="me-4">Home</NuxtLink>
                <NuxtLink to="/login">Login</NuxtLink>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>