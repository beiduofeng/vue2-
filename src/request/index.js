
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://8.154.19.163:3000/api',


    timeout: 1000,
});

// 添加 axios 拦截器，统一处理响应的数据
axiosInstance.interceptors.response.use(
    (response) => {
        const { data, status, statusText } = response || {};
        return {
            data,
            status,
            statusText
        };
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);


/**
 * post 接口封装
 * @param {*} url 接口路径，如 /login，会和创建 axios 时的 baseURL 做拼接
 * @param {*} params 
 * @returns 
 */
export const post = (
    url,
    params
) => {
    return axiosInstance.post(url, params);
}