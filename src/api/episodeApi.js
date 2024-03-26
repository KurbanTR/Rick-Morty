import {instance} from './instance'

export const episodeApi = {
    getAllEpisode(params){
        return instance.get(`episode/`,{params})
    },
    getEpisode(id){
        return instance.get(`episode/${id}`)
    },

}