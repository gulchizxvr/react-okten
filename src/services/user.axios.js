import {axiosInstance} from "./axios.service";
import {url} from "../urls";

const userService = {
    getAllUser: () => axiosInstance(url.users),
    createUser: (object) => axiosInstance.post(url.users,object),
    getAllComments: ()=> axiosInstance(url.comments),
    createComment: (comment) => axiosInstance.post(url.comments,comment)
}

export {userService}