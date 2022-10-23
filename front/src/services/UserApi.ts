import { useAxios } from "./axios"

export const LoginUserApi = async (data: object) => {

    return await useAxios({
        method: 'post',
        url: `user/login`,
        data: data
    })
}

export const RegisterUserApi = async (data: any) => {
    return await useAxios({
        method: 'post',
        url: `user/register`,
        data: data
    })
}

export const UpdateUserApi = async (id: string, data: any) => {
    return await useAxios({
        method: 'put',
        url: `user/update/${id}`,
        data: data
    })
}
export const DeleteUserApi = async (id: string, data: any) => {

    return await useAxios({
        method: 'delete',
        url: `user/delete/${id}`,
    })
}


