<template>
    <div class="pages">
        <div class="container">
            <div class="row">
                <div class="lt">
                    <img src="../assets/404/man.png" alt="">
                </div>
                <div class="rt">
                    <p>啊！啊！啊！页面走丢了！</p>
                    <p>别走，您可以选择调头返回上一页或者返回首页！</p>
                    <span>Don't go, you can choose to turn around and go back to the previouspage or homepage!</span>
                    <em>
                        <a class="lt_btn btn" onclick="window.history.back(-1);">
                            返回上一页 <i class="icon_back"></i>
                        </a>
                        <a class="rt_btn btn" href="/">
                            返回首页 <i class="icon_home"></i>
                        </a>
                    </em>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    .pages {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #009FE9;
    }
    .container {
        width: 100%;
        max-width: 960px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    .row {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 20%;
    }
    em,s {
        font-style: normal;
    }
    a {
        text-decoration: none;
    }
    .row .lt {
        width: 50%;
        float: left;
    }

    .row .rt {
        width: 50%;
        float: right;
        padding-top: 15%;
        color: #fff;
    }
    .row .rt p {
        max-width: 500px;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .row .rt span {
        font-size: 16px;
    }
    .row .btn {
        border: 2px solid #fff;
        border-radius: 250px;
        text-align: center;
        padding: 13px 47px;
        font-size: 18px;
        background: #009FE9;
        color: #fff;
    }
    .row .lt_btn {
        float: left;
    }
    .row .rt_btn {
        float: right;
    }
    .row .btn:hover {
        background: #fff;
        color: #009FE9;
    }
    .row em {
        width: 100%;
        overflow: hidden;
        float: left;
        max-width: 450px;
        font-size: 24px;
        margin-top: 53px;
    }
    .rt a {
        cursor: pointer;
    }

    /*响应式调整*/
    @media(min-width:320px) and (max-width: 481px) {
        .row .lt {
            display: none;
        }
        .row .rt {
            width: 100%;
            overflow: hidden;
            display: block;
            margin: 0 auto;
        }
        .row em {
            width: 100%;
            overflow: hidden;
            display: block;
            margin: 0 auto;
            margin-top: 40px;
        }
        .row .btn {
            width: 200px;
            overflow: hidden;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            font-size: 14px;
            float: none;
        }
    }

</style>
