const axios = require("axios");
const instance = axios.create({
  baseURL: '/api',
  timeout: 15000,
});
//请求拦截
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//响应拦截
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports=instance