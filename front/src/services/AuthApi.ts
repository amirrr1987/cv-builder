import { useAxios } from "./axios"

export const LoginAuthApi = async (data: object) => {

    return await useAxios({
        method: 'post',
        url: `auth/login`,
        data: data
    })
}

export const RegisterAuthApi = async (data: any) => {
    return await useAxios({
        method: 'post',
        url: `auth/register`,
        data: data
    })
}

export const UpdateAuthApi = async (id: string, data: any) => {
    return await useAxios({
        method: 'put',
        url: `auth/update/${id}`,
        data: data
    })
}
export const DeleteAuthApi = async (id: string, data: any) => {

    return await useAxios({
        method: 'delete',
        url: `auth/delete/${id}`,
    })
}


