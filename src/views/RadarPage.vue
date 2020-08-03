<template>
    <div class="container">
        <RectangleRadar :state="state"></RectangleRadar>
    </div>
</template>

<script>
    import RectangleRadar from '@/components/RectangleRadar.vue'
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
            RectangleRadar
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
        background: #2c2e2f;
    }
</style>
