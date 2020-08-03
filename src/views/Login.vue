<template>
    <div id="bg">
        <el-container>
            <el-header></el-header>
            <el-main>
                <h5 class="title">{{title}}</h5>
                <br>
                <br>
                <el-card class="box-card">
                    <el-button type="primary" @click="OnStart">开始游戏</el-button>
                    <br>
                    <br>
                    <br>
                    <el-button type="primary" @click="OnSave">读取存档</el-button>
                    <br>
                    <br>
                    <br>
                    <el-button type="primary" @click="OnSetting">系统设置</el-button>
                </el-card>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    import {SignIn} from '../api/getApiRes.js'

    let qs = require('qs');
    import Global from '../Global.js'
    import router from "../router";

    export default {
        data() {
            return {
                title: 'XXX游戏',
                form: {
                    name: 'test',
                    pwd: '123456',
                    valid: '1234',
                },
                overtime: '',
            }
        },
        mounted() {
        },
        methods: {
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
        }
    }
</script>

<style scoped>
    #bg {
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

</style>
