import {axiosInstance} from "./axios.service";


import {urls} from "../config";

const userService = {
    getAll: axiosInstance(urls.users),
    getPosts: (idUser) => axiosInstance(`${urls.posts}?userId=${idUser}`)
}

export {userService}