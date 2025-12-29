import axios from "axios";

const BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5001/api"
        : "https://maple-banquet-hall.vercel.app/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api; // ✅ keep default export
