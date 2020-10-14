import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/haodaima.css';
import '@/assets/css/user.css';
import App from './App.vue';

import axios from './config/axios.js';
Vue.prototype.$axios = axios;

import router from './router/index.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
