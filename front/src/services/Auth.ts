import Axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
// import { getToken } from '/@/utils/auth'

const APP_SURVEY_API_URL = 'http://localhost:5000/api/'
//const APP_SURVEY_API_URL = 'https://api.hacoupian.net/survey/api/'
const useAxios = (headers = {}): AxiosInstance => {
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
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    return _axios
}

const LoginAuthApi = async (user:object) => {
    return await useAxios().post(`auth/login`, user)
}

const RegisterAuthApi = async (survey: any) => {
    return await useAxios().post(
        `auth/register`, survey
    )
}

const UpdateAuthApi = async (AuthId: string, AuthData: any) => {
    return await useAxios().put(
        `auth/update${AuthId}`, AuthData
    )
}
const DeleteAuthApi = async (AuthId: string, AuthData: any) => {
    return await useAxios().put(
        `auth/delete${AuthId}`, AuthData
    )
}

const Services = {
    useAxios,
    LoginAuthApi,
    RegisterAuthApi,
    UpdateAuthApi,
    DeleteAuthApi
}

export default Services