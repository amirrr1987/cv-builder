import { useAxios } from "./axios"

export const GetPersonalApi = async (personalId: string) => {
    return await useAxios().get(`profile/${personalId}`)
}

export const setPersonalApi = async (survey: any) => {
    return await useAxios().post(
        `profile/`, survey
    )
}

export const UpdatePersonalApi = async (personalId: string, personalData: any) => {
    return await useAxios().put(
        `profile/${personalId}`, personalData
    )
}