import { useAxios } from "./axios"

export const GetPersonalApi = async (id: string) => {
    return await useAxios({
        method: 'get',
        url: `profile/${id}`,
        data: null
    })
}


export const UpdatePersonalApi = async (id: string, data: any) => {
    return await useAxios({
        method: 'put',
        url: `profile/${id}`,
        data: data
    })
}