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
                config.headers['x-auth-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxYzljNGRjY2YzNDkzMjUzMGJiOTMiLCJtb2JpbGUiOiIzNCIsImlhdCI6MTY2MzE1ODcyNH0.x4lfLjTTSyLtBTinWJ-bQhwoF1mpuqb7A0aGzPSMYv4'
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    return _axios
}

const GetPersonalApi = async (personalId:string) => {
    return await useAxios().get(`profile/${personalId}`)
}

const setPersonalApi = async (survey: any) => {
    return await useAxios().post(
        `profile/`, survey
    )
}

const UpdatePersonalApi = async (personalId: string, personalData: any) => {
    return await useAxios().put(
        `profile/${personalId}`, personalData
    )
}

const Services = {
    useAxios,
    setPersonalApi,
    GetPersonalApi,
    UpdatePersonalApi
}

export default Services