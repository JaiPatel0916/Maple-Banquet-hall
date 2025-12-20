export const isAdminLoggedIn = () => {
    return !!localStorage.getItem("adminToken");
};

export const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
};
