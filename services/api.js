import axios from 'axios';

const api = axios.create({

  baseURL: "http://192.168.0.104:5000/api",

});
/*
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  config.headers.Authorization = token;

  return config;
});

*/
export default api;
