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

const PostAuthApi = async (user:object) => {
    return await useAxios().post(`auth`, user)
}

const setAuthApi = async (survey: any) => {
    return await useAxios().post(
        `profile/`, survey
    )
}

const UpdateAuthApi = async (AuthId: string, AuthData: any) => {
    return await useAxios().put(
        `profile/${AuthId}`, AuthData
    )
}

const Services = {
    useAxios,
    setAuthApi,
    PostAuthApi,
    UpdateAuthApi
}

export default Services