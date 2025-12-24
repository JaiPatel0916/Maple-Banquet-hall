import { useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const PopupManager = () => {
    const [activePopup, setActivePopup] = useState(null);
    const [trash, setTrash] = useState([]);
    const [enabled, setEnabled] = useState(true);
    const [file, setFile] = useState(null);
    const [confirmRestoreId, setConfirmRestoreId] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    const fetchPopups = async () => {
        const { data } = await api.get("/popup/admin");
        setActivePopup(data.active?.[0] || null);
        setTrash(data.trash || []);
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
        toast.success("Popup uploaded successfully");
        setFile(null);
        fetchPopups();
    };


    const restorePopup = async (id) => {
        await api.patch(`/popup/admin/${id}/restore`);
        toast.success("Popup restored and activated");
        setConfirmRestoreId(null);
        fetchPopups();
    };


    const deleteForever = async (id) => {
        await api.delete(`/popup/admin/${id}/hard`);
        toast.success("Popup permanently deleted");
        setConfirmDeleteId(null);
        fetchPopups();
    };

    const toggleFeature = async () => {
        await api.patch("/popup/admin/settings/toggle");
        toast.info(`Popup feature ${enabled ? "disabled" : "enabled"}`);
        fetchPopups();
    };

    return (
        <div className="space-y-10">

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Popup Manager</h2>
                    <p className="text-sm text-gray-500">
                        Only one popup can be active at a time
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
                            className={`h-5 w-5 bg-white rounded-full transition ${enabled ? "translate-x-6" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>
            </div>


            <div>
                <h3 className="font-semibold mb-3">Active Popup</h3>
                {activePopup ? (
                    <img
                        src={activePopup.image}
                        className="h-64 rounded-xl object-cover border"
                    />
                ) : (
                    <p className="text-sm text-gray-500">No active popup</p>
                )}
            </div>

      
            <div className="flex gap-4 items-center">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                    onClick={uploadPopup}
                    className="bg-[#d29922] text-white px-4 py-2 rounded"
                >
                    Upload & Replace
                </button>
            </div>

     
            <div>
                <h3 className="font-semibold mb-4">Trash</h3>

                {trash.length === 0 && (
                    <p className="text-sm text-gray-500">Trash is empty</p>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                    {trash.map((p) => (
                        <div key={p._id} className="border rounded-xl overflow-hidden">
                            <img
                                src={p.image}
                                className="h-40 w-full object-cover"
                            />

                            <div className="p-3 space-y-2">
                                {confirmRestoreId === p._id ? (
                                    <div className="text-xs text-center space-y-2">
                                        <p className="text-gray-600">
                                            Restoring will replace current popup
                                        </p>
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => restorePopup(p._id)}
                                                className="bg-green-600 text-white px-3 py-1 rounded"
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                onClick={() => setConfirmRestoreId(null)}
                                                className="bg-gray-400 text-white px-3 py-1 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : confirmDeleteId === p._id ? (
                                    <div className="text-xs text-center space-y-2">
                                        <p className="text-red-600">Delete permanently?</p>
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => deleteForever(p._id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded"
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                onClick={() => setConfirmDeleteId(null)}
                                                className="bg-gray-400 text-white px-3 py-1 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-between gap-2">
                                        <button
                                            onClick={() => setConfirmRestoreId(p._id)}
                                            className="text-xs bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            Restore
                                        </button>
                                        <button
                                            onClick={() => setConfirmDeleteId(p._id)}
                                            className="text-xs bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete Forever
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PopupManager;
