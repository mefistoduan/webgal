<template>
        <div class="container">
            <div style="display: inline; float: left; width: 50%; border: #3b4151 solid 1px">
                <ve-sankey :data="chartData" :settings="chartSettings"></ve-sankey>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            this.chartSettings = {
                links: [
                    { source: '首页', target: '列表页a', value: 0.5 },
                    { source: '首页', target: '列表页b', value: 0.5 },
                    { source: '列表页a', target: '内容页a-1', value: 0.1 },
                    { source: '列表页a', target: '内容页a-2', value: 0.4 },
                    { source: '列表页b', target: '内容页b-1', value: 0.2 },
                    { source: '列表页b', target: '内容页b-2', value: 0.3 }
                ]
            }
            return {
                days: 13,
                chartData: {
                    columns: ['页面', '访问量'],
                    rows: [
                        { '页面': '首页', '访问量': 100000 },
                        { '页面': '列表页a', '访问量': 20000 },
                        { '页面': '列表页b', '访问量': 80000 },
                        { '页面': '内容页a-1', '访问量': 10000 },
                        { '页面': '内容页a-2', '访问量': 10000 },
                        { '页面': '内容页b-1', '访问量': 60000 },
                        { '页面': '内容页b-2', '访问量': 20000 }
                    ]
                },
                chartExtend:{
                    color:['#4ad2ff','#ad1453','#333333','#ffffff']
                }
            }
        },
        mounted() {
            let that = this;
            this.timer = setInterval(() => {
                that.getDate();
            }, 3300);
        },
        methods: {
            getDate() {
                let that = this;
                let newDate1 = that.getRandomInt(1000, 25000);
                let newDate2 = that.getRandomInt(1000, 2500);
                let newDate3 = that.getRandomInt(1000, 2500);
                let newDate4 = that.getRandomInt(1000, 2500);
                // this.chartData.rows = [
                //     {'日期': '1/1', '访问用户': newDate1},
                //     {'日期': '1/2', '访问用户': 2000},
                //     {'日期': '1/3', '访问用户': 2000},
                //     {'日期': '1/4', '访问用户': 2000}
                // ]
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        },
    }
</script>

<style scoped>

</style>
