<template>
    <div class="container">
        <br>
        <el-page-header @back="goBack" content="游戏存档">
        </el-page-header>
        <br>
        <el-row>
            <el-col :span="4" v-for="(o, index) in saves" :key="o.Id" :offset="index != 0||4 ? 1 : 0">
                <el-card>
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                         class="image">
                    <div style="padding: 14px;">
                        <span>{{o.name}}</span>
                        <div class="bottom clearfix">
                            <el-button type="success" icon="el-icon-check" circle @click="readSave(o)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="delSave(o)"></el-button>
                        </div>
                    </div>
                </el-card>
                <br>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Global from '../Global'

    export default {
        data() {
            return {
                currentDate: globalcurrentTime(),
                saves:[
                    {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:1,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:2,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:3,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:4,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:5,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:6,
                    }, {
                        name:'存档1',
                        time:'2020-08-04 10:42',
                        step:11,
                        Id:7,
                    },

                ],
            };
        },
        methods: {
            goBack() {
                this.$router.push({
                    path: '/login',
                    query: {
                        step: 1
                    }
                })
            },
            // todo
            delSave(o) {
                this.$confirm('此操作将永久删除该存档, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 90%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>