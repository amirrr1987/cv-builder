import { message } from 'ant-design-vue'
import Axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { getToken } from '@/utils'
// 09198881400
const APP_SURVEY_API_URL = 'http://localhost:5000/api/'
// export const useAxios = async (headers = {}): AxiosInstance => {
//     const _axios = await Axios.create({
//         baseURL: APP_SURVEY_API_URL,
//         withCredentials: false,
//         headers: {
//             Accept: 'application/json',
//             'content-type': 'application/json',
//             ...headers,
//         }
//     })
//     _axios.interceptors.request.use(
//         (config: AxiosRequestConfig) => {
//             if (config.headers) {
//                // config.headers['Authorization'] = getToken()
//             }
//             return config
//         },
//         (e) => {
//             message.error((e as AxiosError).message)
//             return Promise.reject(e)
//         },
//     )
//     return _axios
// }

// export const useAxios = async (config: any) => {
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
            message.error((e as AxiosError).message)
            return Promise.reject(e)
        },
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