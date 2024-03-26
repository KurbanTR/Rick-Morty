import {instance} from './instance'

export const locationApi = {
    getAllLocation(id){
        return instance.get(`character/${id}`,)
    }
}