<template>
    <header>
        <h1 @click="changeTile">{{title}}</h1>
    </header>
</template>

<script>
    export default {
        // props:{
        //   title:{
        //       type:String,
        //       required:true
        //   }
        // },
        data(){
            return {
                title:"Hello Vue"
            }
        },
        methods:{
            changeTitle:function(){

            }
        }
    }
</script>

<style scoped>

</style>