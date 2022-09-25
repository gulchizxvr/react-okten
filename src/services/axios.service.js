import axios from "axios";

import {baseURL} from "../urls";

const axiosInstance = axios.create({baseURL});

export {axiosInstance}