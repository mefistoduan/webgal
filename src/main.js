import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'


Vue.config.productionTip = false;
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(ElementUI);
if(process.env.NODE_ENV === 'development'){
    // 开发环境时使用模拟数据 引入mockjs
    require('./Mock/index.js');
}else{
    // 实机环境时使用控制台 VConsole
    // let vConsole = new VConsole() // 初始化
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

