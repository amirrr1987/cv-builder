import { useAxios } from "./axios"

export const LoginAuthApi = async (user: object) => {
    return await (await useAxios()).post(`auth/login`, user)
}

export const RegisterAuthApi = async (auth: any) => {
    return await (await useAxios()).post(
        `auth/register`, auth
    )
}

export const UpdateAuthApi = async (AuthId: string, AuthData: any) => {
    return await (await useAxios()).put(
        `auth/update${AuthId}`, AuthData
    )
}
export const DeleteAuthApi = async (AuthId: string, AuthData: any) => {
    return await (await useAxios()).put(
        `auth/delete${AuthId}`, AuthData
    )
}


