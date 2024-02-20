<template>
    <div class="mb-8">
        <NavBar />
    </div>

    <v-container>
        <div>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis dolor impedit porro maxime ad laborum
                aliquam fuga, distinctio odit voluptate provident alias error! Quidem cum libero ipsa tempore eius vitae,
                voluptates alias ut saepe officiis beatae repellendus omnis deleniti aut nostrum optio? Voluptate quibusdam
                beatae iste voluptas dolore repudiandae fugiat ex doloribus! Voluptatibus excepturi voluptatum laboriosam
                officiis libero, debitis molestias cupiditate odit ut provident qui! Assumenda laboriosam cupiditate maiores
                vero aperiam, quasi molestias rem aliquam. Ullam atque cupiditate, inventore possimus sint eligendi cumque
                exercitationem recusandae, iusto quo, veniam soluta fuga praesentium. Iure illum ut laboriosam quam, impedit
                nobis fuga.</p>
        </div>
    </v-container>
</template>

<script setup >
definePageMeta({
  middleware: ["auth-check"]
})
</script>

<style lang="scss" scoped></style>