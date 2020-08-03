<template>
    <div>
        <h5>mock数据显示</h5>
        <ul v-for="r in res">
            <li>{{r.id}}</li>
        </ul>
    </div>
</template>

<script>
    import global from '../Global.js'
    import { worldDetail } from '../api/getApiRes.js'

    export default {
        data() {
            return {
                res: []
            }
        },
        mounted() {
            this.getInfo();
        },
        methods: {
            getInfo() {
                const that = this;
                let param = {};
                worldDetail(param).then(res => {
                    if (res.Code == 0) {
                        that.res = res.Rs;
                    } else {
                        console.log(123);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
