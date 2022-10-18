import { message } from 'ant-design-vue'
import Axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
// import { getToken } from '/@/utils/auth'
// 09198881400
const APP_SURVEY_API_URL = 'http://localhost:5000/api/'
export const useAxios = async (headers = {}): Promise<AxiosInstance> => {
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
               // config.headers['Authorization'] = getToken()
            }
            return config
        },
        (e) => {
            message.error((e as AxiosError).message)
            return Promise.reject(e)
        },
    )
    return _axios
}