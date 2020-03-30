import axios from 'axios' 

axios.interceptors.request.use(function (config) {
  // // 拦截器添加请求头
  let token=localStorage.getItem('token')||'暂无token'
 config.headers.Authorization='Bearer '+ token 
//  let _id=localStorage.getItem('_id')
//  config.headers.Authorization=_id
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