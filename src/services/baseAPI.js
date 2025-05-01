import axios from "axios";

const baseAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export default baseAPI;