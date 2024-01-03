import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

// 引入 antdv
import Antd from 'ant-design-vue';
import './styles/theme.less'//引入less重写antd

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
