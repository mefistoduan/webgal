<template>
    <div class="timePart">
        <div class="lt">
            <h5>活动限界 <s>ACTIVE RANGE</s></h5>
            <P>{{time}}</P>
            <span>{{percent}}%</span>
            <ul>
                <li>
                    <em>STOP</em>
                    <i v-if="i == 1"></i>
                </li>
                <li>
                    <em>SLOW</em>
                    <i v-if="i == 2"></i>
                </li>
                <li>
                    <em>NORMAL</em>
                    <i v-if="i == 3"></i>
                </li>
                <li>
                    <em>RACING</em>
                    <i v-if="i == 4"></i>
                </li>
            </ul>
        </div>
        <div class="rt">
            <div class="top">
                <h5>内部</h5>
                <s>INTERNAL</s>
                <i v-if="type"></i>
            </div>
            <div class="middle">
                <span>主电源供给</span>
                <s>MAIN POWER SUPPLE</s>
            </div>
            <div class="bottom">
                <h5>外部</h5>
                <s>EXTERNAL</s>
                <i v-if="!type"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import global from '../Global'
    export default {
        data() {
            return {
                i: 1,
                type:true,
                time:'8:88:88',
                percent:'00',
            }
        },
        mounted(){
            this.mockDate();
            this.timer = setInterval(() => {
                this.mockDate();
            },1000);
        },
        beforeDestroy () {
            clearInterval(this.timer);
        },
        methods:{
            mockDate(){
                this.time = globalcurrentTime();
                this.percent = (Math.random(0,100)*100).toFixed(0);
                this.type = !this.type;
                this.i = parseInt(Math.random(1,4)*10);
            }
        }
    }
</script>

<style scoped>

    @font-face {
        font-family: UnidreamLED;
        src: url('../assets/font/UnidreamLED.ttf');
    }

    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    em, s, i {
        font-style: normal;
        text-decoration: none;
    }

    .timePart {
        width: 385px;
        height: 170px;
        overflow: hidden;
        display: block;
        margin: 0 auto;

    }

    .timePart .lt {
        width: 240px;
        overflow: hidden;

        float: left;
    }

    .timePart .rt {
        width: 140px;
        overflow: hidden;

        float: right;
    }

    .timePart .lt h5 {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 16px;
        font-weight: normal;
        color: #01355B;
        text-align: left;
    }

    .timePart .lt s {
        font-size: 12px;
    }

    .timePart .lt p {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 70px;
        color: #01355B;
        text-align: left;
        font-family: UniDreamLED;
        letter-spacing:3px;
    }

    .timePart .lt span {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 24px;
        text-align: right;
        font-family: UniDreamLED;
    }

    .timePart .lt ul {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .timePart .lt li {
        width: 23%;
        height: 25px;
        background: #01355B;
        color: #fff;
        text-align: center;
        float: left;
        margin-right: 6px;
        font-size: 12px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .timePart .lt li:nth-child(4) {
        margin-right: 0;
    }

    .timePart .lt li i {
        width: 90%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 5px;
        height: 5px;
        background: #fff;
    }

    .rt .top {
        width: 100%;
        height: 50px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #01355B;
        color: #fff;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .rt .top h5 {
        width: 80px;
        font-size: 24px;
        margin: 0;
        float: left;
        text-align: left;
        padding-left: 20px;
    }

    .rt .top s {
        float: left;
        font-size: 12px;
        text-align: left;
        padding-left: 20px;
    }

    .rt .top i {
        position: relative;
        top: -20px;
        right: 10px;
        float: right;
        width: 15px;
        height: 30px;
        background: linear-gradient(135deg,#fff 25%,#005EA2 0,
        #005EA2 50%,#fff 0,
        #fff 75%,#005EA2 0);
        background-size: 12px 12px;
    }

    .rt .middle {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 6px;
        margin-bottom: 6px;
        background: #01355B;
        color: #fff;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .middle span {
        width: 100%;
        margin: 0 auto;
        display: block;
        font-size: 14px;
        text-align: left;
        padding-left: 10px;
    }

    .middle s {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 12px;
    }

    .rt .bottom {
        width: 100%;
        height: 50px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #01355B;
        color: #fff;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .rt .bottom h5 {
        width: 80px;
        font-size: 24px;
        margin: 0;
        float: left;
        text-align: left;
        padding-left: 20px;
    }

    .rt .bottom s {
        float: left;
        font-size: 12px;
        text-align: left;
        padding-left: 20px;
    }

    .rt .bottom s {
        font-size: 12px;
    }

    .rt .bottom i {
        position: relative;
        top: -20px;
        right: 10px;
        float: right;
        width: 15px;
        height: 30px;
        background: linear-gradient(135deg,#fff 25%,#005EA2 0,
        #005EA2 50%,#fff 0,
        #fff 75%,#005EA2 0);
        background-size: 12px 12px;
    }
</style>
