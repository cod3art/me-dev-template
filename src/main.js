import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import * as commonUtils from "./util/commonUtils"; // 引入全局工具函数模块
import * as commonFilters from "./util/commonFilters"; // 引入全局过滤器模块

Vue.config.productionTip = false;

// 引入样式组件
import { Loading } from "vant";

Vue.use(Loading);

// 添加全局工具函数
Object.keys(commonUtils).forEach(key => {
  Vue.filter(key, commonUtils[key]);
});

// 添加全局过滤器
Object.keys(commonFilters).forEach(key => {
  Vue.filter(key, commonFilters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
