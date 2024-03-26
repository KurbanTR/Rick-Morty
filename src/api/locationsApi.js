import {instance} from './instance'

export const locationsApi = {
    getAllLocation(params){
        return instance.get(`location/`,{params})
    },
    getLocation(id){
        return instance.get(`location/${id}`)
    },
}