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

const GetPersonalApi = async () => {
    return await useAxios().get(`personal`)
}

const setPersonalApi = async (survey: any) => {
    return await useAxios().post(
        `personal/`, survey
    )
}

const UpdatePersonalApi = async (id: string, displaySetting: any) => {
    return await useAxios().put(
        `personal/${id}`, displaySetting
    )
}

const Services = {
    useAxios,
    setPersonalApi,
    GetPersonalApi,
    UpdatePersonalApi
}

export default Services