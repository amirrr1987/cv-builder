import useAxios from "./axios"

const axios = useAxios()

export const LoginUserApi = async (data: object) => {
    return await axios.post({
        url: `user/login`,
        data: data
    })
}
export const RegisterUserApi = async (data: any) => {
    return await axios.post({
        url: `user/register`,
        data: data
    })
}

export const UpdateUserApi = async (id: string, data: any) => {
    return await axios.put({
        url: `user/update/${id}`,
        data: data
    })
}
export const DeleteUserApi = async (id: string, data: any) => {

    return await axios.delete({
        url: `user/delete/${id}`
    })
}


