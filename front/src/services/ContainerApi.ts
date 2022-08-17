



import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
// import { getToken } from '/@/utils/auth'

const APP_SURVEY_API_URL = 'http://192.168.15.228:8080/survey/api/'
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

const GetSuveryContainerApi = async (containerID: string) => {
    return await useAxios().get(`container/${containerID}`)
}

const CreateContainerApi = async (survey: any) => {
    return await useAxios().post(
        `container/`, survey
    )
}
const UpdateContainerApi = async (containerID: string, survey: any) => {
    return await useAxios().put(
        `container/${containerID}`, survey
    )
}
const DeleteContainerApi = async (id: string) => {
    return await useAxios().delete(
        `container/${id}`
    )
}

const UpdateExamModeApi = async (id: string, status: object) => {
    return await useAxios().patch(
        `/container/exam/mode/${id}`, status
    )
}

const UpdateContainerActivationApi = async (id: string, status: object) => {
    return await useAxios().patch(
        `container/active/${id}`, status
    )
}



const Api = {
    useAxios,
    GetSuveryContainerApi,
    CreateContainerApi,
    UpdateContainerApi,
    DeleteContainerApi,
    UpdateContainerActivationApi,
    UpdateExamModeApi
}

export default Api