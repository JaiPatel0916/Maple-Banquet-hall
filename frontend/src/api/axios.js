const isLocal = window.location.hostname === "localhost";

const api = axios.create({
    baseURL: isLocal
        ? "http://localhost:5001/api"
        : "https://maple-banquet-hall.vercel.app/api",
});
