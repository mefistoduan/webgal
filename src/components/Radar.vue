<template>
    <div class="container">
        <div class="animete-box">
            <div class="animete-boy animete-1 animated heartBeat"></div>
            <div class="animete-girl animete-2 animated heartBeat"></div>
            <div class="dot"></div>
            <div class="pulse"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Radar"
    }
</script>

<style scoped>
    html{
        background: #fff;
        background-size:7.5rem auto;
        -webkit-overflow-scrolling: touch;
        min-height: 100vh;
    }
    body{
        background: #fff;
        background-size:cover;
        max-width: 8rem;
        -webkit-overflow-scrolling: touch;
        margin: 0 auto;
        min-height: 100vh;
    }
    .animete-box{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .container {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
    }
    /*css3波纹*/
    .wrap__uc-waves{overflow:hidden;height:1rem;width:100%;position:absolute;bottom:0;}
    .wrap__uc-waves .wave{width:15rem; transform-origin:center bottom; position:absolute;left:0;bottom:0;}
    .wrap__uc-waves .w1{
        background-size:cover; height:.5rem; animation:anim_wave 5s linear infinite;}
    .wrap__uc-waves .w2{
        background-size:cover; height:.7rem; animation:anim_wave 6s linear infinite;}
    @keyframes anim_wave {
        0% {
            transform: translateX(0) translateZ(0) scaleY(1)
        }
        50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.55)
        }
        100% {
            transform: translateX(-50%) translateZ(0) scaleY(1)
        }
    }


    .animete-box:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .animete-box:after {
        content: ' ';
        display: block;
        background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, green 100%);
        width: 50%;
        height: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
        animation: radar-beam 5s infinite;
        animation-timing-function: linear;
        transform-origin: bottom right;
        border-radius: 100% 0 0 0;
    }


    @keyframes radar-beam {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .animete-boy{
        width: 5px;
        height: 5px;
        background: blue;
        background-size: 50px 50px;
        border-radius: 250px;
    }
    .animete-girl{
        width: 5px;
        height: 5px;
        background: green;
        background-size: 50px 50px;
        border-radius: 250px;
    }

    .animete-1{
        position: absolute;
        left: 100px;
        top: 50px;
        z-index: 3;
    }
    .animete-2{
        position: absolute;
        left: 200px;
        top: 10px;
        z-index: 3;
    }
    .animete-3{
        position: absolute;
        left: 300px;
        top: 300px;
        z-index: 3;
    }
    .animete-4{
        position: absolute;
        left: 280px;
        top: 120px;
        z-index: 3;
    }
    .animete-5{
        position: absolute;
        left: 250px;
        top: 180px;
        z-index: 3;
    }

    @keyframes heartBeat {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        14% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }

        22% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }


        28% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        42% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }

        54% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }

        60%{
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }

        80%{
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .heartBeat {
        -webkit-animation-name: heartBeat;
        animation-name: heartBeat;
        -webkit-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
    }

    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }


    @keyframes warn {
        0% {
            transform: scale(0);
            opacity: 0.0;
        }
        25% {
            transform: scale(0.25);
            opacity: 0.1;
        }
        50% {
            transform: scale(0.5);
            opacity: 0.3;
        }
        75% {
            transform: scale(0.75);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 0.0;
        }
    }
    /* 保持大小不变的小圆圈  */
    .dot {
        position: absolute;
        background: #e20000;
        width: 5px;
        height: 5px;
        left: 50%;
        top: 50%;
        border-radius: 10px;
        z-index: 2;
    }
    /* 产生动画（向外扩散变大）的圆圈  */
    .pulse {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -100px;
        border: 3px solid green;
        box-shadow: 0px 0px 20px green inset;
        border-radius: 150px;
        z-index: 1;
        opacity: 0;
        animation: warn 1.8s linear;
        animation-iteration-count: infinite!important;
    }

    .pulse2 {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -100px;
        border: 3px solid green;
        box-shadow: 0px 0px 20px green inset;
        border-radius: 150px;
        z-index: 1;
        opacity: 0;
        animation: warn 1.8s linear;
        animation-delay:0.6s;
        animation-iteration-count: infinite!important;
    }

    .pulse3 {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -100px;
        border: 3px solid green;
        box-shadow: 0px 0px 20px green inset;
        border-radius: 150px;
        z-index: 1;
        opacity: 0;
        animation: warn 1.8s linear;
        animation-delay:0.3s;
        animation-iteration-count: infinite!important;
    }
</style>
