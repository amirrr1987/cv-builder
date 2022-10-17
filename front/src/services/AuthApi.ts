import { useAxios } from "./axios"

export const LoginAuthApi = async (user: object) => {
    return await useAxios().post(`auth/login`, user)
}

export const RegisterAuthApi = async (auth: any) => {
    console.log('survey',auth);
    return await useAxios().post(
        `auth/register`, {name:'amie'}
    )
}

export const UpdateAuthApi = async (AuthId: string, AuthData: any) => {
    return await useAxios().put(
        `auth/update${AuthId}`, AuthData
    )
}
export const DeleteAuthApi = async (AuthId: string, AuthData: any) => {
    return await useAxios().put(
        `auth/delete${AuthId}`, AuthData
    )
}


