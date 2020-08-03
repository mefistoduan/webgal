<template>
    <div class="container">
        <el-button type="success" @click="toggle">click me</el-button>
        <Hand :state="state"></Hand>
    </div>
</template>

<script>
    import Hand from '@/components/Hand.vue'
    export default {
        data() {
            return {
                state:true
            }
        },
        methods:{
            toggle(){
                this.state = !this.state;
            }
        },
        components: {
            Hand
        }
    }
</script>

<style scoped>
    .container {
        height: 100%;
        padding: 35px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: dodgerblue;
    }
</style>
