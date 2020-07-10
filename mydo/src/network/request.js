import axios from "axios";
export default function request(config) {
  const instance = axios.create({
    baseURL:'http://118.190.39.104:3000',
    timeout: 5000
  })
  // 拦截器
  // 拦截请求
  instance.interceptors.request.use((config) => {
    // 这里需要及时的返回,如果不返回会导致请求挂起
    return config;
  }, err => {
    return err;
  });
  // 拦截响应，对返回的数据进行过滤
  instance.interceptors.response.use((res) => {
    return res.data;
  }, err => {
    return err;
  });
  return instance(config);
}