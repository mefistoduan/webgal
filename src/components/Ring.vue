<template>
        <div class="container">
            <div style="display: inline; float: left; width: 50%; border: #3b4151 solid 1px">
                <ve-ring :data="chartData" :extend="chartExtend"></ve-ring>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                days: 13,
                chartData: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        {'日期': '1/1', '访问用户': 1393},
                        {'日期': '1/2', '访问用户': 3342},
                        {'日期': '1/3', '访问用户': 1543},
                        {'日期': '1/4', '访问用户': 2236}
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
                this.chartData.rows = [
                    {'日期': '1/1', '访问用户': newDate1},
                    {'日期': '1/2', '访问用户': 2000},
                    {'日期': '1/3', '访问用户': 2000},
                    {'日期': '1/4', '访问用户': 2000}
                ]
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        },
    }
</script>

<style scoped>

</style>
