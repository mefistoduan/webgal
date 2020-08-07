<template>
    <div id="bg">
        <el-main>

            <div class="radar">
                <div class="container">
                    <div class="lt">
                        <ul>
                            <li v-for="item in sideLt">
                        <span>
                            <h5>{{item.name}}</h5>
                            <em>{{item.status | filterStatus}}</em>
                        </span>
                                <i class="el-icon-caret-right"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="md">
                        <ul class="iconContainer">
                            <li v-for="point in points" :style="{'left':point.x + 'px','top':point.y + 'px'}">
                                <i class="el-icon-view"></i>
                                <em>{{point.num}}</em>
                            </li>
                        </ul>
                    </div>
                    <div class="rt">
                        <li v-for="item in sideLt">
                        <span>
                        <h5>{{item.name}}</h5>
                            <em>{{item.status | filterStatus}}</em>
                        </span>
                            <i class="el-icon-caret-left"></i>
                        </li>
                    </div>
                </div>
                <div class="warning">
                    <div class="border"></div>
                    <h5>{{title}}</h5>
                    <h3>Drone Warfare</h3>
                    <div class="border"></div>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>

    import Global from '../Global.js'

    export default {
        data() {
            return {
                title: '无人机战争',
                overtime: '',
                sideLt: [
                    {name: 'EDT', status: 1},
                    {name: 'TAD', status: 1},
                    {name: 'EFR', status: 0},
                    {name: 'VDC', status: 1},
                    {name: 'IR', status: 1},
                    {name: 'EXC', status: 0},
                    {name: 'EDT', status: 0},
                ],
                points: []
            }
        },
        mounted() {
            localStorage.token = 1;
            this.mockDate();
            this.timer = setInterval(() => {
                this.mockDate();
            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            mockDate() {
                let that = this;
                let i = parseInt(Math.random(1, 300) * 100);
                let t = parseInt(Math.random(100, 600) * 100);
                let c = (Math.random(1, 300) * 100).toFixed(2);
                let points = [];
                that.points.push({x: i, y: t, num: c})
            },
            OnStart() {
                this.$router.push({
                    path: '/section',
                    query: {
                        step: 1
                    }
                })

            }, OnSave() {
                this.$router.push({
                    path: '/save',
                })

            }, OnSetting() {
                this.$router.push({
                    path: '/setting',
                })

            },
        },
        filters: {
            filterStatus: function (value) {
                let res = parseInt(value) == 1 ? 'WAIT' : 'ACTV';
                return res;
            },
        }
    }
</script>

<style scoped>
    ul, li, p, h5 {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    s, em, i {
        font-style: normal;
        text-align: center;
        text-decoration: none;
    }

    #bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #333;
    }

    .title {
        font-size: 60px;
        text-align: center;
        color: #fff;
        margin-top: 3%;
        margin-bottom: 5px;
    }


    .box-card {
        width: 400px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .box-card .boxTitle {
        font-size: 30px;
        margin-bottom: 15px;
    }

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
        background: linear-gradient(135deg, #2c2e2f 25%, #da000c 0,
        #da000c 50%, #2c2e2f 0,
        #2c2e2f 75%, #da000c 0);
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

    .warning h5 {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 30px;
    }

    .warning h3 {
        font-size: 44px;
        margin: 0;
    }

    .warning span {
        width: 99%;
        overflow: hidden;
        display: block;
        margin: 5px auto;
        border: 1px solid #da000c;
        text-align: center;
    }

    .radar {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .container {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #2c2e2f;
        color: #e36a21;
    }

    .md {
        width: 527px;
        height: 527px;
        overflow: hidden;
        float: left;
        background: #2c2e2f;
        background-image: linear-gradient(rgba(227, 106, 33, .3) 1px, transparent 0),
        linear-gradient(90deg, rgba(227, 106, 33, .3) 1px, transparent 0),
        linear-gradient(rgba(227, 106, 33, .9) 1px, transparent 0),
        linear-gradient(90deg, rgba(227, 106, 33, .9) 1px, transparent 0);
        background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
    }

    .lt {
        width: 100px;
        float: left;
        height: 527px;
    }

    .lt ul {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .lt li {
        width: 80%;
        cursor: pointer;
        height: 100px;
        border-bottom: 1px solid #e36a21;
        float: left;
    }

    .lt li span {
        width: 80%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        border: 2px solid #e36a21;
        padding: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-right: 0;
        margin-top: 22px;
    }

    .lt li em {
        font-size: 12px;
    }

    .lt li i {
        position: relative;
        bottom: 40px;
        right: -10px;
        float: right;
    }

    .rt {
        width: 100px;
        float: right;
        height: 527px;
    }

    .rt ul {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .rt li {
        width: 80%;
        height: 100px;
        border-bottom: 1px solid #e36a21;
        float: right;
        cursor: pointer;
    }

    .rt li span {
        width: 80%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        border: 2px solid #e36a21;
        padding: 3px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-left: 0;
        margin-top: 22px;
    }

    .rt li em {
        font-size: 12px;
    }

    .rt li i {
        position: relative;
        bottom: 40px;
        right: 10px;
        float: left;
    }

    .iconContainer {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .iconContainer li {
        position: relative;
        float: left;
        width: 90px;
    }

    .iconContainer i {
        margin: 10px;
        animation: myAnimation 1s infinite
    }

    .iconContainer li em {
        font-size: 12px;
        float: right;
    }

    @keyframes myAnimation {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
</style>
