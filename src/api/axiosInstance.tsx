import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7099/api",
    headers: {"Content-Type": "application/json"}
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error.message)
        return Promise.reject(error);
    }
)

export default api;