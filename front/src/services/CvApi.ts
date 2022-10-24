import useAxios from "./axios"

const axios = useAxios()

export const GetAllCvApi = async (id: string) => {
    console.log('id', id);
    return await axios.get({
        url: `cv/${id}`,
        data: null
    })
}

export const GetOneCvApi = async (cvId: string) => {
    return await axios.get({
        url: `cv/${cvId}`,
        data: null
    })
}


export const UpdateOneCvApi = async (id: string, data: any) => {
    return await axios.put({
        url: `cv/${id}`,
        data: data
    })
}