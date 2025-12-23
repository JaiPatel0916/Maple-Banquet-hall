export const getPackages = async () => {
  const res = await fetch("http://localhost:5001/api/packages");
  if (!res.ok) throw new Error("Failed to fetch packages");
  return res.json();
};
