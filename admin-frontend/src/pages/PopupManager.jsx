import { useEffect, useState } from "react";
import api from "../api/axios";

const PopupManager = () => {
    const [popups, setPopups] = useState([]);
    const [enabled, setEnabled] = useState(true);
    const [file, setFile] = useState(null);

    const fetchPopups = async () => {
        const { data } = await api.get("/popup/admin");
        setPopups(data.popups);
        setEnabled(data.settings.enabled);
    };

    useEffect(() => {
        fetchPopups();
    }, []);

    const uploadPopup = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        await api.post("/popup/admin", formData);
        setFile(null);
        fetchPopups();
    };

    const togglePopup = async (id) => {
        await api.patch(`/popup/admin/${id}/toggle`);
        fetchPopups();
    };

    const deletePopup = async (id) => {
        if (!window.confirm("Delete this popup?")) return;
        await api.delete(`/popup/admin/${id}`);
        fetchPopups();
    };

  
    const toggleFeature = async () => {
        await api.patch("/popup/admin/settings/toggle");
        fetchPopups();
    };

    return (
        <div>
          
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Popup Manager</h2>
                    <p className="text-sm text-gray-500">
                        Manage welcome popups for visitors
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm">Popup Feature</span>
                    <button
                        onClick={toggleFeature}
                        className={`w-12 h-6 rounded-full transition ${enabled ? "bg-green-600" : "bg-gray-300"
                            }`}
                    >
                        <div
                            className={`h-5 w-5 bg-white rounded-full transform transition ${enabled ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>
            </div>

    
            <div className="flex items-center gap-4 mb-8">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                    onClick={uploadPopup}
                    className="bg-[#d29922] text-white px-4 py-2 rounded"
                >
                    Upload Image
                </button>
            </div>

       
            <div className="grid md:grid-cols-2 gap-6">
                {popups.map((p) => (
                    <div
                        key={p._id}
                        className={`relative rounded-xl overflow-hidden border ${p.isActive ? "border-green-400" : "border-gray-200"
                            }`}
                    >
               
                        {p.isActive && (
                            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                Active
                            </span>
                        )}

                        <img
                            src={p.image}
                            alt="popup"
                            className="h-64 w-full object-cover"
                        />

               
                        <div className="flex justify-between items-center p-4 bg-white">
                            <span
                                className={`text-xs px-2 py-1 rounded ${p.isActive
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-200"
                                    }`}
                            >
                                {p.isActive ? "Active" : "Inactive"}
                            </span>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => togglePopup(p._id)}
                                    className="px-3 py-1 text-sm rounded bg-indigo-500 text-white"
                                >
                                    {p.isActive ? "Deactivate" : "Activate"}
                                </button>

                                <button
                                    onClick={() => deletePopup(p._id)}
                                    className="px-3 py-1 text-sm rounded bg-red-500 text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

    
            <div className="mt-10 bg-[#f8f4ef] p-4 rounded text-sm">
                <b>Preview:</b>
                Popups appear on the home page only.
                Newest popup is shown first. Multiple popups appear one after another.
            </div>
        </div>
    );
};

export default PopupManager;
