import api from "./axios";

export const getPackages = async () => {
  const res = await api.get("/packages");
  return res.data;
};
