import {instance} from './instance'

export const pageApi = {
    getAllPages(params){
        return instance.get(`character/`,{params})
    }
}