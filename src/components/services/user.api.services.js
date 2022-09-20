import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getUsers = () => axiosInstance('/users')

export {getUsers}
