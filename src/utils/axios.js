import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // // 拦截器添加请求头
  let token = localStorage.getItem('token') || 'no token'

  config.headers.Authorization = 'Bearer ' + token

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios 