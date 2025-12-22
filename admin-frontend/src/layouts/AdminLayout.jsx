import { Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../auth/useAuth";

const AdminLayout = () => {
    const navigate = useNavigate();

    const logout = () => {
        logoutAdmin();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>

            {/* DASHBOARD CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div
                    onClick={() => navigate("/dashboard/contacts")}
                    className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg"
                >
                    <h2 className="text-lg font-semibold">Contact Messages</h2>
                    <p className="text-sm text-gray-600">View & manage inquiries</p>
                </div>

                <div
                    onClick={() => navigate("/dashboard/menu")}
                    className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg"
                >
                    <h2 className="text-lg font-semibold">Outdoor Catering</h2>
                    <p className="text-sm text-gray-600">Manage menu</p>
                </div>
                <div
                    onClick={() => navigate("/dashboard/gallery")}
                    className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg"
                >
                    <h2 className="text-lg font-semibold">Gallery</h2>
                    <p className="text-sm text-gray-600">Manage gallery images</p>
                </div>

                <div
                    onClick={() => navigate("/dashboard/stats")}
                    className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg"
                >
                    <h2 className="text-lg font-semibold">Stats</h2>
                    <p className="text-sm text-gray-600">Analytics</p>
                </div>
            </div>

          
            <div className="bg-white rounded shadow p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
