import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getLocalStorage } from "@/utils/localstorage";

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (localStorage.token) {
      config.headers.Authorization = getLocalStorage("token");
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (resp: AxiosResponse) => {
    const { success, msg } = resp.data;
    if (success) {
      return resp.data;
    } else {
      ElMessage.error(msg || "请求错误");
      return Promise.reject(new Error(msg || "Error"));
    }
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export default service;
