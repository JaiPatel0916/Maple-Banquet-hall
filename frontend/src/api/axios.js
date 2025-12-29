import axios from "axios";

const api = axios.create({
    baseURL: "https://maple-banquet-hall.vercel.app/api",
});

export default api;
