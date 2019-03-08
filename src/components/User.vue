<template>
    <div>
        <h1>Hello Users</h1>
        <ul>
            <li v-for="fruit in fruitArr">{{fruit}}</li>
        </ul>
        <button @click="deleteUser">删除</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                fruitArr:['apple','pear','ban']
            }
        },
        methods:{
            deleteUser:function(){
                this.fruitArr.pop();
            }
        }
    }
</script>

<style scoped>

</style>