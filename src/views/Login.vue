<template>
    <div id="bg">
        <el-container>
            <el-header></el-header>
            <el-main>
                <h5 class="title">XXXX系统管理</h5>
                <span class="subtitle">XXXXXX、XXXXXX等管理系统</span>
                <el-card class="box-card">
                    <div class="boxTitle">登陆</div>
                    <el-form ref="form" :model="form" label-width="0px">
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登陆</el-button>
                            <el-button @click="clearForm">清除</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    import { SignIn } from '../api/getApiRes.js'
    let qs = require('qs');
    import Global from '../Global.js'

    export default {
        data() {
            return {
                form: {
                    name: 'test',
                    pwd: '123456',
                    valid: '1234',
                },
                valImgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABQCAMAAAAQlwhOAAAAP1BMVEUAAACcvA7J6TuszB6gwBKcvA6z0yXC4jSryx2+3jCy0iTG5ji72y3G5jievhCryx2dvQ+buw3N7T+21iioyBqdrAOEAAAAAXRSTlMAQObYZgAAA9BJREFUeJzsW2mP4yAMxT341FTVzP//r6tuJmAbm6sh0CRvpF0pTYDHM76amhMnWsBa23sJm8LagzE+Ce8eR+PbGVOPSa/Xa49p35gmhfGz4aTXa0/G8uXnsyHjroQ17FbhLtg9X2B/uwdQ7J0yhFDv/fn52XRtTVDG9/sZ/xkx+mtN+PXxCJ9BoPir3LoK4derL2PBhn9/I4zVgR65M36BwjmO+/EIGY/o7qNOar5DvifQ6cGfinmDfkgSliIzQOIkzps0YkSPhyEUtIKrL+rd0WeObNp6OiChAhiJ8EJVit2I7IiJKlwuF9Cz6HnVEmMAWWFgCo+m8eXyn7GaY8lCqQqTszukwozw4lndMpW9mC8ECvPdGV9hYDZsvVHjp1T/y0PRcArDfIaJdRr/r7X2/5IDpRTlpNtGY+y9MFf4fcnCYuK5CgfDN1x8DQJrNlhhCN2Sfyx39Cbrvt1uVc9ROpQZOF4B4cwcqp2Xvt0qGHuO6JKQRXIPbjIVrsm0cjeojrBgrLINBnadE2GhIpcOz46CcsJKKRPxvkt0IsavE68yZuRKEigWWHBEJuplmF3r/szQ+qFqVesXWmq1qk4EJHRxwjzbwKl0FecV3TsoFZ+fTn9uvkOMXHQMg89A8UE25Ph8hncdG+tFJBRmxix/X+EUNuQUlKwyJkrJOHOnIjJQTGEcoUnCzdaGtfljjYjMEnpa6gabqE/MwnwIX/oY0cgJvMpfaAb97OV/6+3bzS6lcDBNkx4y5imq6Ca9X8KM6Ek1gvvytAGWd0WwmyNxx9n8NCmM3aJrCEO6a5owofAwUsqBdJZthnJbjLC3jELjBjCKW+bLjxuAOCwqocGg4GUCL+eOv0F2miBMzk9BxSLeCqj6S7sIeTvAN4I4WNxarD0YYpqmBBXI7oL6syOPo3cfsxmjJXnlgLSJPg6ofNO024zPAeID5QicKpK0D9fpTy8BMOa107IFCicmje2I+vy6iTGgxqjUT9LPLxkiT+AMiZX8fM1KYPF9AFIdkzNVwWr4gE82kOTU1jBoYUTA5TPgy1nIfO+LLZ68Hyfvb4Nv1JCuBR6XIv1m31L50wyS8BX6Q62/UXM8i6dIKgxBKGTaAS6oDHaGTVu17UZHqQS6Qj52qRVpeYzWis8FyaAM9+60XKLHq++66wGUst6qH/r74SIIrSy55dH85G4GJqzRIv4uyDognrmF1vejeYTtCf0Npd3y7fx25MY4Ce8eR+N74sSJEydObI37/d57CZvifj8Y48EIt/8971iEt/jF9kh8j/cT9cMQ/hcAAP//l64Pg1y7/TYAAAAASUVORK5CYII=',
                overtime: '',
            }
        },
        mounted() {
            this.overtime = new Date();
            // 如果是手动退出用户
            if (this.$route.query.status == 1) {
                // 刷新验证图
                this.changeValImg();
                // 重置倒计时
                this.overtime = new Date();
            }
        },
        methods: {
            //            点击验证码切换
            changeValImg: function () {
                let that = this;
                that.valImgSrc = that.valImgSrc + '?' + Math.random();
            },
            // 登陆
            onSubmit() {
                this.pwdLoginBtn()
            },
            // 清除登陆
            clearForm() {
                this.form.name = '';
                this.form.pwd = '';
                this.form.valid = '';
                this.changeValImg();
            },
            // 密码登陆
            pwdLoginBtn() {
                let that = this;
                let username = this.form.name;
                let userpwd = this.form.pwd;
                let uservalid = this.form.valid;
                // 重置验证码超时
                that.overtime = new Date();
                if (!globalValid(username, 2, 17, '用户名', that)) return;
                if (!globalValid(userpwd, 5, 17, '密码', that)) return;
                if (!globalValid(uservalid, 3, 5, '验证码', that)) return;
                this.loginInfo();
            },
            // pwd登陆
            loginInfo: function () {
                const that = this;
                let url = headapi + '?ctl=ajax&mod=index&act=login';
                let username = this.form.name;
                let userpwd = this.form.pwd;
                let uservalid = this.form.valid;
                let current = new Date();
                let betweenTime = current - that.overtime;
                let s = 120;
                if (betweenTime > s * 1000) {
                    that.changeValImg();
                    that.$message.error('验证码已超时，请重新输入');
                    return false
                }
                let param = {
                    'usercode': username,
                    'passwd': userpwd,
                    'vcode': uservalid,
                    'logintype': 1,
                    'accounttype': 3,
                    'src': 'pc'
                };
                let postdata = qs.stringify(param);
                SignIn(postdata).then(res => {
                    if (res.Code == 0) {
                        that.res = res.Rs;
                        that.userName = res.Rs.userName;
                        localStorage.userName = res.Rs.username;
                        localStorage.token = res.Rs.token;
                        that.$router.push({path: '/'});
                    } else {
                        if (json.code == 10005) {
                            that.$refs.userpwd.value = '';
                            that.$notify({
                                title: '警告',
                                message: '密码错误，请重新输入',
                                type: 'warning'
                            });
                        } else {
                            that.$notify({
                                title: '警告',
                                message: json.memo,
                                type: 'warning'
                            });
                        }
                    }
                })
            }
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

    .subtitle {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        margin-bottom: 40px;
        font-size: 14px;
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

    #validImg {
        position: relative;
        float: right;
        bottom: 35px;
    }
</style>
