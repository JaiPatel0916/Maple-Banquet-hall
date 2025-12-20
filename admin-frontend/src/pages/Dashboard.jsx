import { logoutAdmin } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const logout = () => {
        logoutAdmin();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow">
                    Contact Messages
                </div>
                <div className="bg-white p-6 rounded shadow">
                    Outdoor Catering
                </div>
                <div className="bg-white p-6 rounded shadow">
                    Stats
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
