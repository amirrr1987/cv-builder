import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
// import { getToken } from '/@/utils/auth'

const APP_SURVEY_API_URL = 'http://192.168.15.228:8080/survey/api/'
//const APP_SURVEY_API_URL = 'https://api.hacoupian.net/survey/api/'
function useAxios(headers = {}): AxiosInstance {
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

const GetContainers = async (current_page: number, items_per_page: number) => {
    return await useAxios().get(
        `container/?current_page=${current_page}&items_per_page=${items_per_page}`,
    )
}

const GetPolls = async (
    containerId: any,
    currentPage: number,
    itemsPerPage: number,
) => {
    return await useAxios().get(
        `poll/${containerId}?current_page=${currentPage}&items_per_page=${itemsPerPage}`,
    )
}


const Api = {
    useAxios,
    GetPolls,
    GetContainers,

}

export default Api