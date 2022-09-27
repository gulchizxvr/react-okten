import {axiosInstance} from "./axios.service";

import {urls} from "../urls";

const jsonService = {
    getComments: () => axiosInstance.get(urls.comments),
    getTodos: ()=> axiosInstance.get(urls.todos),
    getAlbums: ()=> axiosInstance(urls.albums),
    getPostById: (id)=> axiosInstance(`${urls.posts}/${id}`)

}

export {jsonService}