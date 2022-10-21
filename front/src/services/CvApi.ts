import { useAxios } from "./axios"

export const GetOneCvApi = async (id: string) => {
    return await useAxios({
        method: 'get',
        url: `cv/${id}`,
        data: null
    })
}


export const UpdateOneCvApi = async (id: string, data: any) => {
    return await useAxios({
        method: 'put',
        url: `cv/${id}`,
        data: data
    })
}