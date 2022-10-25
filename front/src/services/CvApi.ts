import useAxios from "./axios"

const axios = useAxios()

export const GetAllCvApi = async (id: string) => {
    console.log('id', id);
    return await axios.get({
        url: `cv/${id}`,
        data: {}
    })
}

export const GetOneCvApi = async (userId: string, cvId: string) => {
    return await axios.get({
        url: `cv/${userId}/${cvId}`,
        data: {}
    })
}
export const CreateOneCvApi = async (userId: string) => {
    return await axios.post({
        url: `cv/${userId}`,
        data: {}
    })
}
export const DeleteOneCvApi = async (cvId: string) => {
    return await axios.delete({
        url: `cv/${cvId}`,
        data: {}
    })
}


export const UpdateOneCvApi = async (id: string, data: any) => {
    return await axios.put({
        url: `cv/${id}`,
        data: data
    })
}