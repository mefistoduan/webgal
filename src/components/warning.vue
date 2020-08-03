<template>
    <div class="warning">
        <div class="border"></div>
        <h5>第三新东京都战术形态移行</h5>
        <h3>开启</h3>
        <span>start</span>
        <div class="border"></div>
    </div>
</template>

<script>
    export default {
        name: "warning"
    }
</script>

<style scoped>
    .warning {
        width: 200px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        color: #da000c;
    }

    .border {
        width: 100%;
        height: 30px;
        background: linear-gradient(135deg, #fff 25%, #da000c 0,
        #da000c 50%, #fff 0,
        #fff 75%, #da000c 0);
        background-size: 24px 24px;
        animation: progress-bar-stripes 6s linear infinite;
    }

    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 40px 0;
        }
        to {
            background-position: 0 0;
        }
    }

    h5 {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 30px;
    }

    h3 {
        font-size: 44px;
        margin: 0;
    }

    span {
        width: 99%;
        overflow: hidden;
        display: block;
        margin: 5px auto;
        border: 1px solid #da000c;
        text-align: center;
    }
</style>