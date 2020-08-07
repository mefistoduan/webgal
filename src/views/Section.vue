<template>
    <div class="context">
        <div class="bg">
            <img :src="BgSrc" class="bg"/>
            <div class="man">
                <ul>
                    <li>
                        <img :src="manSrc" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="chat">
            <div class="lt" @click="step">
                <div class="speaker_container">
                    <div class="speaker">{{speaker}}:</div>
                </div>
                <br>
                <span class="text">{{text}}</span>
            </div>
            <div class="rt">
                <el-button type="success" id="load" @click="load">读数据</el-button>
                <el-button type="secondary" id="save" @click="save">存数据</el-button>
                <el-button type="default" id="goback" @click="goback">返回首页</el-button>
                <el-button type="primary" id="step" @click="step">下句话</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import story from '../story/index'

    export default {
        data() {
            return {
                speaker: '',
                text: '',
                playingText: false,
                wordid: 1,
                nextWordid: 1,
                currentWordid: 1,
                cid: 0,
                readList: 1,
                event: {},
                manSrc: require("../../static/img/man/king.jpg"),
                BgSrc: require("../../static/img/bg/bg01.png"),
                openChioce: false,
                choiceList: [],
            }
        },
        mounted() {
            // 初始化
            this.initStory();
        },
        methods: {
            // 抉择选项
            confirmChoice(i) {
                this.openChioce = false;
                this.readEvent(i)
            },
            // 返回首页
            goback() {
                this.$router.push(
                    {
                        path: '/login',
                        query: {
                            step: 1
                        }
                    }
                )
            },
            step() {
                let e = this.event;
                this.stepWord(e[0]);
            },
            stepWord(e) {
                let cid = this.cid;
                if (cid == e.content.length) {
                    // 如果有抉择，则开始抉择，如无抉择，直接进入下一个事件
                    let choiceList = e.choice;
                    if (choiceList) {
                        this.choiceList = e.choice;
                        this.openChioce = true;
                    } else {
                        // 读取新的事件
                        this.nextWordid = e.nextEvent;
                        this.readEvent(this.nextWordid);
                    }
                } else {
                    // 继续对话
                    this.wordDisplay(e.content[cid].text);
                    this.speaker = this.RidtoRame(e.content[cid].rid);
                    if (this.RidtoHead(e.content[cid].rid)) {
                        this.manSrc = require("../../static/img/man/" + this.RidtoHead(e.content[cid].rid));
                    } else {
                        this.manSrc = '';
                    }
                    this.cid += 1;
                }
            },
            save() {
                this.savePrgress();
            },
            // 进度保存
            savePrgress() {
                localStorage.saveContent = this.currentWordid;
                this.$toast.success('保存成功');
            },
            load() {
                this.loadPrgress();
            },
            // 读取保存
            loadPrgress() {
                let that = this;
                if (localStorage.saveContent) {
                    console.log(localStorage.saveContent);
                    that.readEvent(localStorage.saveContent);
                    this.$toast.success('读取成功');
                } else {
                    this.$toast.error('读取失败');
                }
            },
            // 更换背景图
            changeBg(src) {
                this.BgSrc = require("../../static/img/bg/" + src);
            },
            // 读取角色名
            RidtoRame(rid) {
                return story['roles'][rid].name;
            },
            // 读取角色头像
            RidtoHead(rid) {
                return story['roles'][rid].head;
            },
            // 初始化
            initStory() {
                this.wordid = 1;
                this.cid = 0;
                this.currentWordid = 1;
                this.readList = 1;
                this.nextWordid = 1;
                this.manSrc = require("../../static/img/man/king.jpg");
                this.readEvent(0);
            },
            readEvent(i) {
                // 新事件归零对话位置
                this.cid = 0;
                let events = story['events'];
                // 加载事件
                this.event = events.filter(item => {
                    if (item.id == i) {
                        return item
                    }
                });
                // 暂存当前世界点
                this.currentWordid = i;
                // 加载bg
                this.changeBg(this.event[0].background);
                // 加载对话
                this.step();
            },
            wordDisplay(word) {
                let index = 0;
                let that = this;
                this.text = '';
                type();

                function type() {
                    that.text = word.substring(0, index++);
                    if (index == 0) {
                        that.playingText == true
                    }
                    if (index <= word.length && that.playingText == true) {
                        setTimeout(type, localStorage.speed);
                    } else {
                        that.text = word
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .context {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        display: block;
        margin: 0 auto;
        padding: 0;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .context .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        background-size: 100% 100% !important;
    }

    .chat {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0px;
        width: 100%;
        display: block;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.3);
    }

    .chat .lt {
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 5px;
        background: rgba(255, 255, 255, 0.8);
    }

    .chat .rt {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 10px;
        background: #fff;
    }

    .chat .rt button {
        margin-right: 5px;
    }

    .chat .rt button:nth-child(last) {
        margin-right: 0;
        float: right;
    }

    .man {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        position: absolute;
        bottom: 240px;
    }

    .man li img {
        width: 160px;
        max-height: 240px;
    }

    .speaker {
        font-size: 16px;
    }

    .text {
        width: 94%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 16px;
        text-align: left;
    }

    .choicePart /deep/ .mu-raised-button {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-bottom: 6px;
    }
</style>