import axios from "axios";

const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

const api = axios.create({
    baseURL: isLocal
        ? "http://localhost:5001/api"
        : "https://maple-banquet-hall.vercel.app/api",
});

export default api;
