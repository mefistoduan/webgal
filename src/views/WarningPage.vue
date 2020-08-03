<template>
    <div class="container">
        <warning :state="state"></warning>
    </div>
</template>

<script>
    import warning from '@/components/warning.vue'
    export default {
        data() {
            return {
                state:true
            }
        },
        components: {
            warning
        }
    }
</script>

<style scoped>

</style>