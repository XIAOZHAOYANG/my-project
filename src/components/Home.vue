<template>
    <div>
        <app-header></app-header>
        <app-user></app-user>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import User from './User.vue'
    import Footer from './Footer.vue'
    export default {
        name: "app",
        comments:{
            'app-header':Header,
            'app-user' : User,
            'app-footer' : Footer
        }
    }
</script>

<style scoped>

</style>