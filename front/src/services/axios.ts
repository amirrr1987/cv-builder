import { message } from 'ant-design-vue'
import Axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { getToken } from '@/utils'
const APP_SURVEY_API_URL = 'http://localhost:5000/api/'
export const useAxios = async (urlConfig: any, headers = {}): Promise<AxiosInstance> => {
    const _axios = await Axios.create({
        baseURL: APP_SURVEY_API_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
            ...headers,
        }
    })
    _axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if (config.headers) {
                config.headers['x-auth-token'] = getToken()
            }
            return config
        },
        (e) => {
            // message.error((e as AxiosError).message)
            // console.log('e',e);
            return Promise.reject(e)
        },
    )
    _axios.interceptors.response.use(
        response => response,
        error => {
            const data = (error as AxiosError).response?.data;
            message.error(data.message)
            return Promise.reject(data);
        }
    )
    switch (urlConfig.method) {
        case 'get':
            return await (await _axios).get(urlConfig.url);
        case 'post':
            return await (await _axios).post(urlConfig.url, urlConfig.data);
        case 'put':
            return await (await _axios).put(urlConfig.url, urlConfig.data);
        case 'delete':
            return await (await _axios).delete(urlConfig.url);
    }
    return _axios
}