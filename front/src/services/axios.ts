import { message } from 'ant-design-vue'
import Axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
// import { getToken } from '/@/utils/auth'

const APP_SURVEY_API_URL = 'http://localhost:5000/api/'
//const APP_SURVEY_API_URL = 'https://api.hacoupian.net/survey/api/'
export const useAxios = (headers = {}): AxiosInstance => {
    const _axios = Axios.create({
        baseURL: APP_SURVEY_API_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
            ...headers,
        },
    })

    _axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if (config.headers) {
                // const token = getToken()
                //debugger
                // config.headers['Authorization'] = token

                console.log('config.headers');
                console.log(config.headers);
                console.log('config.headers');
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