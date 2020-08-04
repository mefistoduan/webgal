<template>
    <div class="container">
        <br>
        <el-page-header @back="goBack" content="游戏设置">
        </el-page-header>
        <br>
        <br>
        <div class="col-lg-6 col-sl-12 pull-left">
            <el-form ref="form" :model="form" label-width="150px">
                <el-form-item label="刷新频率（秒）">
                    <el-input v-model="form.pvalue_interval" placeholder="请输入刷新频率"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="primary" @click="onSubmit">确认</el-button>
                    <el-button size="small" type="primary" @click="onCancle">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    let qs = require('qs');
    import {editbasicinfo} from '../api/getApiRes.js'

    export default {
        data() {
            return {
                form: {
                    pvalue_interval: '12',
                }
            }
        },
        mounted() {

        },
        methods: {
            onSubmit() {
                const that = this;
                if (!that.form.pvalue_interval) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，刷新频率不能为空',
                        type: 'error'
                    });
                    return false
                }

                var reg = /^\+?[1-9][0-9]*$/;//验证非零的正整数
                if (!reg.test(that.form.pvalue_interval)) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，刷新频率不是非零的正整数',
                        type: 'error'
                    });
                    return false
                }

                if (that.form.pvalue_interval > 99) {
                    that.$message({
                        showClose: true,
                        message: '错了哦，刷新频率不能大于99',
                        type: 'error'
                    });
                    return false
                }

                let param = {
                    pvalue_interval: that.form.pvalue_interval
                };
                let postdata = qs.stringify(param);
                editbasicinfo(postdata).then(res => {
                    let json = res;
                    if (json.Code == 0) {
                        that.$message({
                            showClose: true,
                            message: '接口修改成功！',
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/',
                        })
                    } else {
                        that.$message.error(json.Memo);
                    }
                })
            },
            onCancle() {
                this.$message({
                    showClose: true,
                    message: '已取消修改',
                    type: 'fail'
                });
                this.$router.push({
                    path: '/',
                })
            },
            goBack() {
                this.$router.push({
                    path: '/login',
                    query: {
                        step: 1
                    }
                })
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 90%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }

    .row {
        width: 100%;
        overflow: hidden;
        background: #fff;
        float: left;
    }

    .el-button--primary {
        color: #fff;
    }
</style>
