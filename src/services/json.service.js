import {axiosInstance} from "./axios.service";
import {urls} from "../config";

const jsonService = {
    getUser: ()=> axiosInstance(urls.users),
    getPosts: ()=> axiosInstance(urls.posts),
    getComments: ()=> axiosInstance(urls.comments),
}

export {jsonService}