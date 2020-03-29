import axios from 'axios' 

axios.interceptors.request.use(function (config) {
<<<<<<< HEAD
  // // 拦截器添加请求头
  let token=localStorage.getItem('token')||'暂无token'
  
 config.headers.Authorization='Bearer '+ token 
=======
  //在拦截器里添加请求头
  let token = localStorage.getItem('token') || 'no token'
  config.headers.authorization = 'Bearer ' + token 
  
>>>>>>> 0cafc9b2f593fce11b41dc020dd215eb8c0cd230
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