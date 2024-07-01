import './mock';
// 入口文件
import Vue from 'vue'
import App from './App.vue'
import './style/global.less'
import router from './Router';
import store from './store';
import { showMessage } from "@/utils";
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;
import "./eventBus";

// 注册全局指令
import vLoading from './directives/loading';
import vLazy from './directives/lazy';
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
