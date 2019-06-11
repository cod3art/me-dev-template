/**
 * @Description: 统一请求方法
 * @Author: Zhang Hang
 * @Date: 2019-06-10 18:06:46
 */
import Axios from "axios";
import store from "@/store/store";
import qs from "qs"; // node-modules 中的 querystring 模块

// 创建一个 axios 实例，并添加默认配置
const axiosInstance = Axios.create({
  baseURL: process.env.BASE_API, // base_url，'https://some-domain.com/api'
  timeout: 10000, // 请求超时时间
  // `headers` 是即将被发送的自定义请求头
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function(config) {
    // 这里可以自定义一些 config 配置
    console.log(config);

    // 每多一个请求，loading 队列 +1
    store.dispatch("app/setLoading", true);

    return config;
  },
  function(error) {
    // 对请求错误做些什么

    // 请求出错，loading 清 0
    setTimeout(function() {
      store.dispatch("app/setLoading", 0);
    }, 300);

    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    let responseData = response.data;

    // 每成功响应一个请求，loading 队列 -1
    store.dispatch("app/setLoading", false);

    return responseData;
  },
  function(error) {
    // 对响应错误做点什么

    // 每成功响应一个失败的请求，loading 队列 -1
    store.dispatch("app/setLoading", false);

    return Promise.reject(error);
  }
);

export default axiosInstance;
