const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5001/api"
    : "https://maple-banquet-hall.vercel.app/api";

export const getPackages = async () => {
  const res = await fetch(`${BASE_URL}/packages`);
  if (!res.ok) throw new Error("Failed to fetch packages");
  return res.json();
};
