import axios from "axios";

const api = axios.create({
    baseURL: "https://maple-banquet-hall.vercel.app/api", // ✅ LIVE backend
});

api.interceptors.request.use((req) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default api;
