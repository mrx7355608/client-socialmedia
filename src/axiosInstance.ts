import axios from "axios";
import { config } from "../config/config";

const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    timeout: 5000,
    withCredentials: true,
});

export default axiosInstance;
